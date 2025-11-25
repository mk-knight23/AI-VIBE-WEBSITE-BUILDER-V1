"use client";

import { useState } from "react";
import { Settings2Icon, KeyIcon, CheckIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSettingsStore, PROVIDER_MODELS, PROVIDER_INFO, type Provider } from "@/lib/settings-store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const SettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const { provider, model, providers, setProvider, setModel, setProviderConfig } = useSettingsStore();
  const [tempKeys, setTempKeys] = useState(providers);
  const [showKeys, setShowKeys] = useState<Record<Provider, boolean>>({
    openrouter: false,
    megallm: false,
    agentrouter: false,
    routeway: false,
  });

  // Update tempKeys when providers change
  useState(() => {
    setTempKeys(providers);
  });

  const handleSave = () => {
    // Validate at least one provider has an API key
    const hasValidKey = Object.values(tempKeys).some(config => config?.apiKey?.trim().length > 0);
    
    if (!hasValidKey) {
      toast.error("Please configure at least one API provider");
      return;
    }

    // Validate current provider has API key
    if (!tempKeys[provider]?.apiKey?.trim()) {
      toast.error(`Please configure API key for ${PROVIDER_INFO[provider].name}`);
      return;
    }

    Object.entries(tempKeys).forEach(([prov, config]) => {
      if (config) {
        setProviderConfig(prov as Provider, config);
      }
    });
    toast.success("Settings saved successfully");
    setOpen(false);
  };

  const toggleKeyVisibility = (prov: Provider) => {
    setShowKeys(prev => ({ ...prev, [prov]: !prev[prov] }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Settings2Icon className="h-4 w-4" />
          {providers[provider]?.apiKey && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings2Icon className="h-5 w-5" />
            AI Provider Settings
          </DialogTitle>
        </DialogHeader>

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
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className={cn("w-3 h-3 rounded-full", PROVIDER_INFO[prov].color)} />
                      <span className="font-medium text-sm">{PROVIDER_INFO[prov].name}</span>
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
              const providerConfig = tempKeys[prov] || { apiKey: '', baseUrl: PROVIDER_INFO[prov].baseUrl };
              return (
              <div key={prov} className="space-y-3 p-4 rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", PROVIDER_INFO[prov].color)} />
                  <Label className="text-base font-semibold">{PROVIDER_INFO[prov].name}</Label>
                  {providerConfig.apiKey && (
                    <CheckIcon className="h-4 w-4 text-green-500 ml-auto" />
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">API Key</Label>
                  <div className="relative">
                    <KeyIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showKeys[prov] ? "text" : "password"}
                      placeholder={`Enter ${PROVIDER_INFO[prov].name} API key`}
                      value={providerConfig.apiKey}
                      onChange={(e) =>
                        setTempKeys({
                          ...tempKeys,
                          [prov]: { ...providerConfig, apiKey: e.target.value.trim() },
                        })
                      }
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
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Base URL</Label>
                  <Input
                    value={providerConfig.baseUrl}
                    onChange={(e) =>
                      setTempKeys({
                        ...tempKeys,
                        [prov]: { ...providerConfig, baseUrl: e.target.value },
                      })
                    }
                    disabled
                    className="bg-muted"
                  />
                </div>
              </div>
            )})}
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
