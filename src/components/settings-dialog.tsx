"use client";

import { useState, useEffect } from "react";
import {
  Settings2Icon,
  KeyIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useSettingsStore,
  PROVIDER_MODELS,
  PROVIDER_INFO,
  type Provider,
} from "@/lib/settings-store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useCSRFFetch } from "@/hooks/use-csrf";

export const SettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    provider,
    model,
    providers,
    setProvider,
    setModel,
    setProviderConfig,
  } = useSettingsStore();
  const csrfFetch = useCSRFFetch();
  const [tempKeys, setTempKeys] = useState(providers);
  const [showKeys, setShowKeys] = useState<Record<Provider, boolean>>({
    openrouter: false,
    megallm: false,
    agentrouter: false,
    routeway: false,
  });
  const [validating, setValidating] = useState<Record<Provider, boolean>>({
    openrouter: false,
    megallm: false,
    agentrouter: false,
    routeway: false,
  });
  const [validationStatus, setValidationStatus] = useState<
    Record<Provider, "valid" | "invalid" | null>
  >({
    openrouter: null,
    megallm: null,
    agentrouter: null,
    routeway: null,
  });

  useEffect(() => {
    setMounted(true);
    setTempKeys(providers);

    // Migrate: Clear any API keys from localStorage that may have been stored previously
    try {
      const oldData = localStorage.getItem("vibe-settings");
      if (oldData) {
        const parsed = JSON.parse(oldData);
        if (parsed.state?.providers) {
          // Clear API keys from localStorage
          parsed.state.providers = {
            openrouter: {
              apiKey: "",
              baseUrl:
                parsed.state.providers.openrouter?.baseUrl ||
                PROVIDER_INFO.openrouter.baseUrl,
            },
            routeway: {
              apiKey: "",
              baseUrl:
                parsed.state.providers.routeway?.baseUrl ||
                PROVIDER_INFO.routeway.baseUrl,
            },
            megallm: {
              apiKey: "",
              baseUrl:
                parsed.state.providers.megallm?.baseUrl ||
                PROVIDER_INFO.megallm.baseUrl,
            },
            agentrouter: {
              apiKey: "",
              baseUrl:
                parsed.state.providers.agentrouter?.baseUrl ||
                PROVIDER_INFO.agentrouter.baseUrl,
            },
          };
          localStorage.setItem("vibe-settings", JSON.stringify(parsed));
        }
      }
    } catch (e) {
      // Ignore migration errors
    }
  }, [providers]);

  const validateApiKey = async (prov: Provider) => {
    const config = tempKeys[prov];
    if (!config?.apiKey?.trim()) {
      toast.error(`Please enter an API key for ${PROVIDER_INFO[prov].name}`);
      return;
    }

    setValidating((prev) => ({ ...prev, [prov]: true }));
    setValidationStatus((prev) => ({ ...prev, [prov]: null }));

    try {
      const response = await csrfFetch("/api/validate-key", {
        method: "POST",
        body: JSON.stringify({
          provider: prov,
          apiKey: config.apiKey.trim(),
          baseUrl: config.baseUrl,
        }),
      });

      const result = await response.json();

      if (result.valid) {
        setValidationStatus((prev) => ({ ...prev, [prov]: "valid" }));
        toast.success(`${PROVIDER_INFO[prov].name} API key is valid ✓`);
      } else {
        setValidationStatus((prev) => ({ ...prev, [prov]: "invalid" }));
        toast.error(
          `${PROVIDER_INFO[prov].name} API key is invalid: ${result.error || "Unknown error"}`,
        );
      }
    } catch (error) {
      setValidationStatus((prev) => ({ ...prev, [prov]: "invalid" }));
      toast.error(`Failed to validate ${PROVIDER_INFO[prov].name} API key`);
    } finally {
      setValidating((prev) => ({ ...prev, [prov]: false }));
    }
  };

  const handleSave = () => {
    const hasValidKey = Object.values(tempKeys).some(
      (config) => config?.apiKey?.trim().length > 0,
    );

    if (!hasValidKey) {
      toast.error("Please configure at least one API provider");
      return;
    }

    // Save all configurations
    Object.entries(tempKeys).forEach(([prov, config]) => {
      if (config) {
        setProviderConfig(prov as Provider, config);
      }
    });

    // If current provider has no key, switch to one that does
    if (!tempKeys[provider]?.apiKey?.trim()) {
      const providerWithKey = (Object.keys(tempKeys) as Provider[]).find((p) =>
        tempKeys[p]?.apiKey?.trim(),
      );
      if (providerWithKey) {
        setProvider(providerWithKey);
        toast.success(
          `Settings saved! Switched to ${PROVIDER_INFO[providerWithKey].name}`,
        );
      }
    } else {
      toast.success("Settings saved successfully");
    }

    setOpen(false);
  };

  const toggleKeyVisibility = (prov: Provider) => {
    setShowKeys((prev) => ({ ...prev, [prov]: !prev[prov] }));
  };

  const hasAnyKey =
    mounted && Object.values(providers).some((p) => p?.apiKey?.trim());

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          title="AI Provider Settings"
        >
          <Settings2Icon className="h-4 w-4" />
          {mounted &&
            (hasAnyKey ? (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
            ) : (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            ))}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings2Icon className="h-5 w-5" />
            AI Provider Settings
          </DialogTitle>
        </DialogHeader>

        {!hasAnyKey && mounted && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-4">
            <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
              ⚠️ No API keys configured. Add at least one provider key to start
              generating websites.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Get free keys:{" "}
              <a
                href="https://openrouter.ai/keys"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                OpenRouter
              </a>{" "}
              or{" "}
              <a
                href="https://routeway.ai"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Routeway
              </a>
            </p>
          </div>
        )}

        {/* Security notice about API keys */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            🔒 API Key Security
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            For your security, API keys are stored in memory only and are not
            persisted to browser storage. You will need to re-enter your keys
            each time you refresh the page.
          </p>
        </div>

        <Tabs defaultValue="provider" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="provider">Provider & Model</TabsTrigger>
            <TabsTrigger value="keys">API Keys</TabsTrigger>
          </TabsList>

          <TabsContent value="provider" className="space-y-6 mt-6">
            <div className="space-y-3">
              <Label>Select Provider</Label>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(PROVIDER_INFO) as Provider[]).map((prov) => (
                  <button
                    key={prov}
                    onClick={() => setProvider(prov)}
                    className={cn(
                      "p-4 rounded-lg border-2 transition-all hover:scale-105",
                      provider === prov
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={cn(
                          "w-3 h-3 rounded-full",
                          PROVIDER_INFO[prov].color,
                        )}
                      />
                      <span className="font-medium text-sm">
                        {PROVIDER_INFO[prov].name}
                      </span>
                      {providers[prov]?.apiKey && (
                        <CheckIcon className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Select Model</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROVIDER_MODELS[provider].map((m) => (
                    <SelectItem key={m.id} value={m.id}>
                      <div className="flex items-center gap-2">
                        {m.name}
                        {m.free && (
                          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded">
                            FREE
                          </span>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="keys" className="space-y-6 mt-6">
            {(Object.keys(PROVIDER_INFO) as Provider[]).map((prov) => {
              const providerConfig = tempKeys[prov] || {
                apiKey: "",
                baseUrl: PROVIDER_INFO[prov].baseUrl,
              };
              return (
                <div key={prov} className="space-y-3 p-4 rounded-lg border">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        PROVIDER_INFO[prov].color,
                      )}
                    />
                    <Label className="text-base font-semibold">
                      {PROVIDER_INFO[prov].name}
                    </Label>
                    {validationStatus[prov] === "valid" && (
                      <CheckIcon className="h-4 w-4 text-green-500 ml-auto" />
                    )}
                    {validationStatus[prov] === "invalid" && (
                      <span className="h-4 w-4 text-red-500 ml-auto">✗</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">
                      API Key
                    </Label>
                    <div className="relative">
                      <KeyIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type={showKeys[prov] ? "text" : "password"}
                        placeholder={`Enter ${PROVIDER_INFO[prov].name} API key`}
                        value={providerConfig.apiKey}
                        onChange={(e) => {
                          setTempKeys({
                            ...tempKeys,
                            [prov]: {
                              ...providerConfig,
                              apiKey: e.target.value.trim(),
                            },
                          });
                          setValidationStatus((prev) => ({
                            ...prev,
                            [prov]: null,
                          }));
                        }}
                        className="pl-10 pr-10"
                        autoComplete="off"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-8 w-8"
                        onClick={() => toggleKeyVisibility(prov)}
                      >
                        {showKeys[prov] ? (
                          <EyeOffIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {providerConfig.apiKey && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => validateApiKey(prov)}
                        disabled={validating[prov]}
                        className="w-full"
                      >
                        {validating[prov] ? "Validating..." : "Test API Key"}
                      </Button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">
                      Base URL
                    </Label>
                    <Input
                      value={providerConfig.baseUrl}
                      onChange={(e) =>
                        setTempKeys({
                          ...tempKeys,
                          [prov]: {
                            ...providerConfig,
                            baseUrl: e.target.value,
                          },
                        })
                      }
                      disabled
                      className="bg-muted"
                    />
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Settings</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
