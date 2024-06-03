import { BooleanNode } from './types';

type BooleanFunctions = {
  required(message?: string): BooleanNode & BooleanFunctions;
  positive(message?: string): BooleanNode & BooleanFunctions;
  negative(message?: string): BooleanNode & BooleanFunctions;
};

export function boolean(message?: string): BooleanNode & BooleanFunctions {
  const node: BooleanNode = {
    type: 'boolean',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: BooleanFunctions = {
    required(message) {
      node.meta.required = { message };
      return { ...node, ...functions };
    },

    positive(message) {
      node.meta.positive = { message };
      return { ...node, ...functions };
    },

    negative(message) {
      node.meta.negative = { message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
