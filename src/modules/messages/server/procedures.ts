import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import z from "zod";

const MAX_MESSAGE_LENGTH = 10000;
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

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
            .max(MAX_MESSAGE_LENGTH, {message: "Value is too long"}),
          projectId: z.string()
            .min(1, {message: "Project ID is required."}),
          model: z.string().optional(),
          provider: z.string().optional(),
          apiKey: z.string().optional(),
          baseUrl: z.string().url().optional(),
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
                model: input.model,
                provider: input.provider,
                apiKey: input.apiKey,
                baseUrl: input.baseUrl,
            }
        });
        return createdMessage;
      })
})