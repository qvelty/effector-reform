import { BaseNodeProps, ValidationNodeType } from '../types';
import { WhenNode } from '../conditional';

type NodeProps<Type, Meta> = {
  type: Type;
  meta: BaseNodeProps & Meta;
};

export type NumberNode = NodeProps<
  ValidationNodeType['Number'],
  {
    min?: { limit: number; message?: string };
    max?: { limit: number; message?: string };
    integer?: { message?: string };
  }
>;

export type StringNode = NodeProps<
  ValidationNodeType['String'],
  {
    min?: { limit: number; message?: string };
    max?: { limit: number; message?: string };
    email?: { message?: string };
    uuid?: { message?: string };
    date?: { message?: string };
  }
>;

export type AnyDate = Date | number | string;

export type DateNode = NodeProps<
  ValidationNodeType['Date'],
  {
    older?: { date: AnyDate; message?: string };
    newer?: { date: AnyDate; message?: string };
  }
>;

export type BooleanNode = NodeProps<
  ValidationNodeType['Boolean'],
  {
    positive?: { message?: string };
    negative?: { message?: string };
  }
>;

export type FileNode = NodeProps<
  ValidationNodeType['File'],
  {
    min?: { limit: number; message?: string };
    max?: { limit: number; message?: string };
    format?: { acceptedFormats: string | string[]; message?: string };
  }
>;

export type ValidationShape = Record<string, ValidationSchemaNode | WhenNode>;

export type ObjectNode = NodeProps<
  ValidationNodeType['Object'],
  {
    shape?: ValidationShape;
  }
>;

export type ArrayNode = NodeProps<
  ValidationNodeType['Array'],
  {
    shapeVariants?: { variants: ValidationSchemaNode[]; message?: string };
    min?: { limit: number; message?: string };
    max?: { limit: number; message?: string };
  }
>;

export type ValidationSchemaNode =
  | NumberNode
  | StringNode
  | DateNode
  | ObjectNode
  | ArrayNode
  | FileNode
  | BooleanNode;
