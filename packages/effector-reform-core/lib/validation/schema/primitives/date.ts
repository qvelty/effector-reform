import { AnyDate, DateNode } from './types';

type DateFunctions = {
  required(message?: string): DateNode & DateFunctions;
  older(date: AnyDate, message?: string): DateNode & DateFunctions;
  newer(date: AnyDate, message?: string): DateNode & DateFunctions;
};

export function date(message?: string): DateNode & DateFunctions {
  const node: DateNode = {
    type: 'date',
    meta: {
      typeCheckError: message,
    },
  };

  const functions: DateFunctions = {
    required(message) {
      node.meta.required = { message };
      return { ...node, ...functions };
    },

    older(date, message) {
      node.meta.older = { date, message };
      return { ...node, ...functions };
    },

    newer(date, message) {
      node.meta.newer = { date, message };
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}
