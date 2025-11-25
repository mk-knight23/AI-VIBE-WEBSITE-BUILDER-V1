import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { generateSlug } from "random-word-slugs";
import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { TRPCError } from "@trpc/server";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeInput, validateApiKey, validateUrl } from "@/lib/sanitize";

export const projectsRouter = createTRPCRouter({
  getOne: protectedProcedure
  .input(z.object({
    id: z.string().min(1, { message: "ID is required." }),
  }))
    .query(async ({ input, ctx }) => {

      const existingProject = await prisma.project.findUnique({
        where: {
          id: input.id,
          userId: ctx.auth.userId,
        },
      });
      if (!existingProject) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Project not found." });
      }

      return existingProject;
    }),


  getMany: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const projects = await prisma.project.findMany({
          where: {
            userId: ctx.auth.userId,
          },
          orderBy: {
            updatedAt: "desc",
          },
        });
        return projects;
      } catch (error: any) {
        console.error("Error fetching projects:", error);
        // Return empty array if database is unreachable
        if (error.code === 'P1001' || error.message?.includes("Can't reach database")) {
          console.warn("Database unreachable, returning empty projects list");
          return [];
        }
        throw new TRPCError({ 
          code: "INTERNAL_SERVER_ERROR", 
          message: "Failed to fetch projects" 
        });
      }
    }),
  create: protectedProcedure
    .input(
      z.object({
        value: z.string()
        .min(1, { message: "Value is required." })
        .max(10000, { message: "Value is too long" }),
        provider: z.enum(["openrouter", "megallm", "agentrouter", "routeway"]).optional(),
        model: z.string().optional(),
        apiKey: z.string().optional(),
        baseUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Rate limiting: 5 projects per minute per user
      const rateLimitResult = rateLimit(`project-create:${ctx.auth.userId}`, 5, 60000);
      
      if (!rateLimitResult.success) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "Too many requests. Please wait a moment before creating another project.",
        });
      }

      // Sanitize input
      const sanitizedValue = sanitizeInput(input.value);
      
      if (!sanitizedValue) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Project description cannot be empty",
        });
      }

      // Validate API configuration if provided
      if (input.provider) {
        if (!input.apiKey || !validateApiKey(input.apiKey, input.provider)) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid API key format",
          });
        }
        
        if (!input.baseUrl || !validateUrl(input.baseUrl)) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid API base URL",
          });
        }
      }

      const createdProject = await prisma.project.create({
        data: {
          name: generateSlug(2, {
            format: "kebab"
          }),
          userId: ctx.auth.userId,
          messages: {
            create: {
              content: sanitizedValue,
              role: "USER",
              type: "RESULT",
            }
          }
        }
      });

      await inngest.send({
        name: "code-agent/run",
        data: {
          value: sanitizedValue,
          projectId: createdProject.id,
          provider: input.provider,
          model: input.model,
          apiKey: input.apiKey,
          baseUrl: input.baseUrl,
        }
      });
      return createdProject;
    })
})