import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import z from "zod";

export const messagesRouter = createTRPCRouter({
    getMany: protectedProcedure
    .input(
        z.object({
          projectId: z.string()
            .min(1, {message: "Project ID is required."}),
        }),
      )
      .query(async({ input, ctx })=>{

        const messages = await prisma.message.findMany({
            where: {
                projectId: input.projectId,
                project: {
                  userId: ctx.auth.userId,
                }
            },
            include: {
                fragment: true,
            },
            orderBy: {
                updatedAt: "asc",
            },
        });
        return messages;
      }),
    create: protectedProcedure
      .input(
        z.object({
          value: z.string()
            .min(1, {message: "Value is required."})
            .max(10000, {message: "Value is too long"}),
          projectId: z.string()
            .min(1, {message: "Project ID is required."}),
          model: z.enum([
            "minimax/minimax-m2:free",
            "tngtech/deepseek-r1t2-chimera:free",
            "z-ai/glm-4.5-air:free",
            "deepseek/deepseek-chat-v3-0324:free",
            "qwen/qwen3-coder:free",
          ]).optional(),
        })
      )
      .mutation(async ({input, ctx})=>{
        const existingProject = await prisma.project.findUnique({
          where: {
            id: input.projectId,
            userId: ctx.auth.userId,
          },
        })

        if (!existingProject) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Project not found." });
        }

        const createdMessage = await prisma.message.create({
            data : {
                projectId: input.projectId,
                content: input.value,
                role: "USER",
                type: "RESULT",
            }
        })

        await inngest.send({
            name: "code-agent/run",
            data: {
                value: input.value,
                projectId: input.projectId,
                model: input.model ?? "minimax/minimax-m2:free",
            }
        });
        return createdMessage;
      })
})