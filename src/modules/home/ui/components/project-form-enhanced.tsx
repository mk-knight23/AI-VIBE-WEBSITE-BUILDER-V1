"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon, Loader2Icon, Wand2Icon, BotIcon, ZapIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSettingsStore, PROVIDER_MODELS, PROVIDER_INFO, type Provider } from "@/lib/settings-store";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  value: z
    .string()
    .min(1, { message: "Value is required." })
    .max(10000, { message: "Value is too long" }),
});

const TEMPLATES = [
  { icon: "🚀", text: "A modern SaaS landing page with pricing" },
  { icon: "🛒", text: "An e-commerce product page with cart" },
  { icon: "📊", text: "A dashboard with charts and analytics" },
  { icon: "💬", text: "A chat interface with message bubbles" },
  { icon: "🎨", text: "A portfolio website with project gallery" },
  { icon: "📝", text: "A blog with article cards and sidebar" },
];

export const ProjectFormEnhanced = () => {
    const trpcProxy = trpc();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const { provider, model, getActiveConfig } = useSettingsStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: "",
    },
  });

  const { mutate, isPending } = useMutation(trpcProxy.projects.create.mutationOptions({
    onSuccess: async (project) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project created! Redirecting...");
      
      // Navigate to project page where generation will start
      router.push(`/projects/${project.id}`);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create project");
    },
  }));

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const config = getActiveConfig();
    
    // Check if current provider has API key, if not find one that does
    if (!config?.apiKey?.trim()) {
      const providers = useSettingsStore.getState().providers;
      const providerWithKey = (Object.keys(providers) as Provider[]).find(
        p => providers[p]?.apiKey?.trim()
      );

      if (!providerWithKey) {
        toast.error("Please configure at least one API key in settings", {
          description: "Click the settings icon (⚙️) to add your API key"
        });
        return;
      }

      // Switch to provider with key
      useSettingsStore.getState().setProvider(providerWithKey);
      toast.info(`Using ${PROVIDER_INFO[providerWithKey].name}`);
      
      // Use the new provider's config
      const newConfig = providers[providerWithKey];
      mutate({
        value: data.value.trim(),
        provider: providerWithKey,
        model: useSettingsStore.getState().model,
        apiKey: newConfig.apiKey,
        baseUrl: newConfig.baseUrl,
      });
      return;
    }

    if (!config?.baseUrl?.trim()) {
      toast.error("Invalid provider configuration");
      return;
    }

    if (!data.value.trim()) {
      toast.error("Please describe what you want to build");
      return;
    }

    mutate({
      value: data.value.trim(),
      provider,
      model,
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
    });
  };

  const providerColors = {
    openrouter: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    megallm: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    agentrouter: "bg-green-500/10 text-green-600 border-green-500/20",
    routeway: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  };

  const currentModel = PROVIDER_MODELS[provider].find((m) => m.id === model);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div
            className={cn(
              "relative rounded-2xl border-2 transition-all duration-300",
              isFocused
                ? "border-primary shadow-lg shadow-primary/20"
                : "border-border hover:border-primary/50"
            )}
          >
            {/* Provider & Model Info */}
            <div className="flex items-center gap-2 p-3 border-b bg-muted/30">
              <BotIcon className="h-4 w-4 text-muted-foreground" />
              <Badge variant="outline" className={cn("text-xs", providerColors[provider])}>
                {provider.toUpperCase()}
              </Badge>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground truncate flex-1">
                {currentModel?.name || model}
              </span>
              {currentModel?.free && (
                <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600">
                  FREE
                </Badge>
              )}
            </div>

            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <div className="relative">
                  <TextareaAutosize
                    {...field}
                    placeholder="Describe the website you want to build... (e.g., 'A modern portfolio with dark mode')"
                    className="w-full p-6 bg-transparent resize-none focus:outline-none text-base min-h-[120px]"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => {
                      field.onChange(e);
                      setCharCount(e.target.value.length);
                    }}
                    disabled={isPending}
                  />

                  {/* Character count */}
                  <div className="absolute bottom-3 left-6 text-xs text-muted-foreground">
                    {charCount} / 10000
                  </div>

                  {/* Submit button */}
                  <motion.div
                    className="absolute bottom-3 right-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isPending || !field.value}
                      className="rounded-full h-10 w-10 shadow-lg"
                    >
                      {isPending ? (
                        <Loader2Icon className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowUpIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </motion.div>
                </div>
              )}
            />
          </div>

          {/* Quick Templates */}
          <AnimatePresence>
            {!isPending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Wand2Icon className="h-4 w-4" />
                  <span>Quick templates:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {TEMPLATES.map((template, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      onClick={() => form.setValue("value", template.text)}
                      className="p-3 text-left rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg mr-2">{template.icon}</span>
                      <span className="text-muted-foreground group-hover:text-foreground">
                        {template.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Status */}
          {isPending && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20"
            >
              <Loader2Icon className="h-5 w-5 animate-spin text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Building your website...</p>
                <p className="text-xs text-muted-foreground">
                  Using {currentModel?.name || model} via {provider}
                </p>
              </div>
              <ZapIcon className="h-5 w-5 text-primary animate-pulse" />
            </motion.div>
          )}
        </form>
      </Form>
    </motion.div>
  );
};
