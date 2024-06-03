import {
  AndNode,
  ConditionNode,
  EqualNode,
  HigherNode,
  LowerNode,
  NotEqualNode,
  NotNode,
  OrNode,
  WhenNode,
} from './types';
import { ValidationSchemaNode } from '../primitives';
import { ValueNode } from '../additional';

type WhenFunctions = {
  then(result?: ValidationSchemaNode | string | null): WhenNode & WhenFunctions;
  else(result?: ValidationSchemaNode | string | null): WhenNode & WhenFunctions;
};

export function when(condition: ConditionNode): WhenNode & WhenFunctions {
  const node: WhenNode = {
    type: 'when',
    meta: {
      condition,
    },
  };

  const functions: WhenFunctions = {
    then(result) {
      node.meta.then = result;
      return { ...node, ...functions };
    },

    else(result) {
      node.meta.else = result;
      return { ...node, ...functions };
    },
  };

  return { ...node, ...functions };
}

export function and(...nodes: ConditionNode[]): AndNode {
  return {
    type: 'and',
    meta: {
      nodes,
    },
  };
}

export function or(...nodes: ConditionNode[]): OrNode {
  return {
    type: 'or',
    meta: {
      nodes,
    },
  };
}

export function equal(
  firstNode: ValueNode | ConditionNode,
  secondNode: ValueNode | ConditionNode,
): EqualNode {
  return {
    type: 'equal',
    meta: {
      firstNode,
      secondNode,
    },
  };
}

export function notEqual(
  firstNode: ValueNode | ConditionNode,
  secondNode: ValueNode | ConditionNode,
): NotEqualNode {
  return {
    type: 'notEqual',
    meta: {
      firstNode,
      secondNode,
    },
  };
}

export function not(node: ConditionNode): NotNode {
  return {
    type: 'not',
    meta: {
      node,
    },
  };
}

export function higher(node: ValueNode, limit: number): HigherNode {
  return {
    type: 'higher',
    meta: {
      limit,
      node,
    },
  };
}

export function lower(node: ValueNode, limit: number): LowerNode {
  return {
    type: 'lower',
    meta: {
      limit,
      node,
    },
  };
}
