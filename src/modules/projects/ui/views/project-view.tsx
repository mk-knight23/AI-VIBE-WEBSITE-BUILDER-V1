"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessagesContainer } from "../components/messages-container";
import { useState, useEffect } from "react";
import { Fragment } from "@/generated/prisma";
import { ProjectHeader } from "../components/project-header";
import { EyeIcon, CodeIcon, FileIcon, CheckCircleIcon } from "lucide-react";
import { GenerationPreview } from "../components/generation-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Props {
  projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
  const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
  const [tabState, setTabState] = useState<"preview" | "code">("preview");
  const [generatedFiles, setGeneratedFiles] = useState<Record<string, string>>({});
  const [selectedFile, setSelectedFile] = useState<string>("index.html");

  const handleFilesGenerated = (files: Record<string, string>, previewUrl: string) => {
    setGeneratedFiles(files);
    if (Object.keys(files).length > 0) {
      setSelectedFile(Object.keys(files)[0]);
      setTabState("code");
      setTimeout(() => setTabState("preview"), 2000);
    }
  };

  const fragmentFiles = activeFragment?.content 
    ? (() => {
        try {
          const parsed = JSON.parse(activeFragment.content);
          return typeof parsed === 'object' ? parsed : { "index.html": activeFragment.content };
        } catch {
          return { "index.html": activeFragment.content };
        }
      })()
    : activeFragment?.files || {};

  const displayFiles = Object.keys(generatedFiles).length > 0 ? generatedFiles : fragmentFiles;

  useEffect(() => {
    if (Object.keys(displayFiles).length > 0 && !displayFiles[selectedFile]) {
      setSelectedFile(Object.keys(displayFiles)[0]);
    }
  }, [displayFiles, selectedFile]);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {/* Chat Section */}
        <ResizablePanel
          defaultSize={30}
          minSize={25}
          maxSize={45}
          className="flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl"
        >
          <ProjectHeader projectId={projectId} />
          <MessagesContainer
            projectId={projectId}
            activeFragment={activeFragment}
            setActiveFragment={setActiveFragment}
          />
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 transition-colors" />

        {/* Preview/Code Section */}
        <ResizablePanel defaultSize={70} minSize={50}>
          <Tabs value={tabState} onValueChange={(v) => setTabState(v as any)} className="h-full flex flex-col">
            <div className="border-b bg-white dark:bg-gray-900 px-4 shadow-sm">
              <TabsList className="h-12">
                <TabsTrigger value="preview" className="gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  <EyeIcon className="h-4 w-4" />
                  Preview
                  {activeFragment?.sandboxUrl && (
                    <CheckCircleIcon className="h-3 w-3 text-green-500" />
                  )}
                </TabsTrigger>
                <TabsTrigger value="code" className="gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  <CodeIcon className="h-4 w-4" />
                  Code
                  {Object.keys(displayFiles).length > 0 && (
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
                      {Object.keys(displayFiles).length}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Preview Tab */}
            <TabsContent value="preview" className="flex-1 m-0 overflow-hidden">
              <GenerationPreview 
                projectId={projectId} 
                fragment={activeFragment}
                onFilesGenerated={handleFilesGenerated}
              />
            </TabsContent>

            {/* Code Tab */}
            <TabsContent value="code" className="flex-1 m-0 flex overflow-hidden">
              {Object.keys(displayFiles).length > 0 ? (
                <>
                  {/* File Browser */}
                  <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <FileIcon className="h-4 w-4" />
                        Files ({Object.keys(displayFiles).length})
                      </h3>
                    </div>
                    <ScrollArea className="flex-1">
                      <div className="p-2 space-y-1">
                        {Object.keys(displayFiles).map((filename) => (
                          <button
                            key={filename}
                            onClick={() => setSelectedFile(filename)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 group ${
                              selectedFile === filename 
                                ? "bg-blue-500 text-white shadow-md" 
                                : "hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            <FileIcon className={`h-4 w-4 flex-shrink-0 ${
                              selectedFile === filename ? "text-white" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200"
                            }`} />
                            <span className="truncate font-medium">{filename}</span>
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Code Viewer */}
                  <div className="flex-1 flex flex-col bg-gray-950 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-800 bg-gray-900 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <code className="text-sm text-gray-400 font-mono">{selectedFile}</code>
                        <Badge variant="outline" className="text-xs">
                          {displayFiles[selectedFile]?.length || 0} chars
                        </Badge>
                      </div>
                    </div>
                    <ScrollArea className="flex-1">
                      <pre className="p-6 text-sm text-gray-100 font-mono leading-relaxed">
                        <code className="language-html">{displayFiles[selectedFile] || "// Empty file"}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 bg-gray-50 dark:bg-gray-900">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <FileIcon className="h-10 w-10 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">No Code Files</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Generate a website to view the source code
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ProjectView;
