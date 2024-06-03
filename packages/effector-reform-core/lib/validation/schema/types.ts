const validationNodeType = {
  Number: 'number',
  String: 'string',
  Date: 'date',
  Array: 'array',
  Object: 'object',
  File: 'file',
  Boolean: 'boolean',
  Value: 'value',

  When: 'when',
  And: 'and',
  Or: 'or',
  Get: 'get',
  Equal: 'equal',
  NotEqual: 'notEqual',
  Higher: 'higher',
  Lower: 'lower',
  Not: 'not',

  Debounce: 'debounce',
} as const;

export type ValidationNodeType = typeof validationNodeType;

export type RequiredNodeProp = {
  required?: { message?: string };
};

export type TypeCheckErrorProp = {
  typeCheckError?: string;
};

export type BaseNodeProps = RequiredNodeProp & TypeCheckErrorProp;

export type * from './additional/types';
export type * from './conditional/types';
export type * from './primitives/types';
