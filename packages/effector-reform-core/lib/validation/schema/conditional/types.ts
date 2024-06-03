import { ValidationNodeType } from '../types';
import { ValueNode } from '../additional/types';
import { ValidationSchemaNode } from '../primitives';

export type EqualNode = {
  type: ValidationNodeType['Equal'];
  meta: {
    firstNode: ValueNode | ConditionNode;
    secondNode: ValueNode | ConditionNode;
  };
};

export type AndNode = {
  type: ValidationNodeType['And'];
  meta: {
    nodes: ConditionNode[];
  };
};

export type OrNode = {
  type: ValidationNodeType['Or'];
  meta: {
    nodes: ConditionNode[];
  };
};

export type NotNode = {
  type: ValidationNodeType['Not'];
  meta: {
    node: ConditionNode;
  };
};

export type NotEqualNode = {
  type: ValidationNodeType['NotEqual'];
  meta: {
    firstNode: ValueNode | ConditionNode;
    secondNode: ValueNode | ConditionNode;
  };
};

export type HigherNode = {
  type: ValidationNodeType['Higher'];
  meta: {
    limit: number;
    node: ValueNode;
  };
};

export type LowerNode = {
  type: ValidationNodeType['Lower'];
  meta: {
    limit: number;
    node: ValueNode;
  };
};

export type WhenNode = {
  type: ValidationNodeType['When'];
  meta: {
    condition: ConditionNode;
    then?: ValidationSchemaNode | string | null;
    else?: ValidationSchemaNode | string | null;
  };
};

export type ConditionNode =
  | EqualNode
  | AndNode
  | OrNode
  | NotNode
  | NotEqualNode
  | LowerNode
  | HigherNode;
