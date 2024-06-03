import { ObjectNode, ValidationShape } from './types';

type ObjectFunctions = {
  required(message?: string): ObjectNode & ObjectFunctions;
};

export function object(
  shape?: ValidationShape,
  message?: string,
): ObjectNode & ObjectFunctions {
  const node: ObjectNode = {
    type: 'object',
    meta: {
      typeCheckError: message,
      shape,
    },
  };

  const functions: ObjectFunctions = {
    required(message) {
      node.meta.required = { message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
