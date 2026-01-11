import { type TreeItem } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertFilesToTreeItems(
  files: { [path: string]: string },
): TreeItem[] {

  interface TreeNode {
    [key: string]: TreeNode | null;
  };

  const tree: TreeNode = {};

  const sortedPaths = Object.keys(files).sort();

  for (const filePath of sortedPaths) {
    const parts = filePath.split('/');
    let current = tree;

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }

    const fileName = parts[parts.length - 1];
    current[fileName] = null;
  }

  function convertNode(node: TreeNode, name?: string): TreeItem | TreeItem[] {
    const entries = Object.entries(node);

    if (entries.length === 0) {
      return { id: name || "", name: name || "" };
    }

    const children: TreeItem[] = [];

    for (const [key, value] of entries) {
      if (value === null) {
        children.push({ id: key, name: key });
      } else {
        const subTree = convertNode(value, key);
        if (Array.isArray(subTree)) {
          children.push({ id: key, name: key, children: subTree });
        } else {
          children.push({ id: key, name: key, children: [subTree] });
        }
      }
    }
    return children;
  }

  const result = convertNode(tree);
  return Array.isArray(result) ? result : [result];
};

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .slice(0, 10000); // Enforce max length
}

/**
 * Validate API key format
 */
export function validateApiKey(key: string, provider: string): boolean {
  if (!key || typeof key !== 'string') return false;

  const trimmed = key.trim();

  // Basic validation - keys should start with expected prefix
  const prefixes: Record<string, string> = {
    openrouter: 'sk-or-',
    megallm: 'sk-mega-',
    agentrouter: 'sk-',
    routeway: 'sk-',
  };

  const prefix = prefixes[provider];
  if (prefix && !trimmed.startsWith(prefix)) {
    return false;
  }

  // Keys should be at least 20 characters
  return trimmed.length >= 20;
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}