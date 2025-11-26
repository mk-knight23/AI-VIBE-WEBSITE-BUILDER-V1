// Core Application Types

export type MessageRole = "USER" | "ASSISTANT";
export type MessageType = "RESULT" | "ERROR";

export interface Project {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  type: MessageType;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Fragment {
  id: string;
  messageId: string;
  sandboxUrl: string;
  title: string;
  files: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

// Tree View Types
export interface TreeItem {
  id: string;
  name: string;
  children?: TreeItem[];
}

// UI State Types
export interface EditorState {
  activeFile: string | null;
  openFiles: string[];
  unsavedChanges: boolean;
}

export interface CanvasState {
  zoom: number;
  pan: { x: number; y: number };
  selectedElements: string[];
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface StreamResponse {
  chunk: string;
  done: boolean;
  metadata?: Record<string, any>;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: number;
}

// Settings Types
export interface UserSettings {
  theme: "light" | "dark" | "system";
  autoSave: boolean;
  autoSaveInterval: number;
  showLineNumbers: boolean;
  fontSize: number;
}

// Export Types
export type ExportFormat = "html" | "react" | "nextjs";

export interface ExportOptions {
  format: ExportFormat;
  includeAssets: boolean;
  minify: boolean;
}
