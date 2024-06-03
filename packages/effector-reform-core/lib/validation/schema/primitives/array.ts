import { ArrayNode, ValidationSchemaNode } from './types';

type ArrayFunctions = {
  required(message?: string): ArrayNode & ArrayFunctions;
  of(
    variants: ValidationSchemaNode[],
    message?: string,
  ): ArrayNode & ArrayFunctions;
  min(limit: number, message?: string): ArrayNode & ArrayFunctions;
  max(limit: number, message?: string): ArrayNode & ArrayFunctions;
};

export function array(message?: string): ArrayNode & ArrayFunctions {
  const node: ArrayNode = {
    type: 'array',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: ArrayFunctions = {
    required(message) {
      node.meta.required = { message };
      return { ...node, ...functions };
    },

    of(variants, message) {
      node.meta.shapeVariants = { variants, message };
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
  };

  return { ...node, ...functions };
}
