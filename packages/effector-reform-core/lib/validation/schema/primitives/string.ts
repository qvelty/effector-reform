import { StringNode } from './types';

type StringFunctions = {
  required(message?: string): StringNode & StringFunctions;
  min(limit: number, message?: string): StringNode & StringFunctions;
  max(limit: number, message?: string): StringNode & StringFunctions;
  email(message?: string): StringNode & StringFunctions;
  uuid(message?: string): StringNode & StringFunctions;
  date(message?: string): StringNode & StringFunctions;
};

export function string(message?: string): StringNode & StringFunctions {
  const node: StringNode = {
    type: 'string',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: StringFunctions = {
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

    email(message) {
      node.meta.email = { message };
      return { ...node, ...functions };
    },

    uuid(message) {
      node.meta.uuid = { message };
      return { ...node, ...functions };
    },

    date(message) {
      node.meta.date = { message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
