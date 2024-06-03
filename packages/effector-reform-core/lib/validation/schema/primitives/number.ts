import { NumberNode } from './types';

type NumberFunctions = {
  required(message?: string): NumberNode & NumberFunctions;
  min(limit: number, message?: string): NumberNode & NumberFunctions;
  max(limit: number, message?: string): NumberNode & NumberFunctions;
  integer(message?: string): NumberNode & NumberFunctions;
};

export function number(message?: string): NumberNode & NumberFunctions {
  const node: NumberNode = {
    type: 'number',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: NumberFunctions = {
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

    integer(message) {
      node.meta.integer = { message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
