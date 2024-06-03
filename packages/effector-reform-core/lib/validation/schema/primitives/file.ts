import { FileNode } from './types';

type FileFunctions = {
  required(message?: string): FileNode & FileFunctions;
  min(limit: number, message?: string): FileNode & FileFunctions;
  max(limit: number, message?: string): FileNode & FileFunctions;
  format(
    acceptedFormats: string | string[],
    message?: string,
  ): FileNode & FileFunctions;
};

export function file(message?: string): FileNode & FileFunctions {
  const node: FileNode = {
    type: 'file',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: FileFunctions = {
    required(message) {
      node.meta.required = { message };
      return { ...node, ...functions };
    },

    min(limit, message) {
      node.meta.min = { limit, message };
      return { ...node, ...functions };
    },

    max(limit, message) {
      node.meta.max = { limit, message };
      return { ...node, ...functions };
    },

    format(acceptedFormats, message) {
      node.meta.format = { acceptedFormats, message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
