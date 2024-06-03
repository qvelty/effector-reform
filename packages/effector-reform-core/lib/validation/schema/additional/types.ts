import { ValidationNodeType } from '../types';
import { Effect, Store } from 'effector';
import { WhenNode } from '../conditional';
import { ValidationSchemaNode } from '../primitives';

type PrimaryValueNodeMeta = {
  type: 'primary';
  value: any;
};

type FieldValueNodeMeta = {
  type: 'field';
  path: string;
};

type StoreValueNodeMeta = {
  type: 'store';
  $store: Store<any>;
};

type EffectResultNodeMeta = {
  type: 'effect';
  effect: Effect<any, any>;
  params: any;
};

export type DebounceNode = {
  type: ValidationNodeType['Debounce'];
  meta: {
    node: WhenNode | ValidationSchemaNode;
    timer: number;
  };
};

export type ValueNode = {
  type: ValidationNodeType['Value'];
  meta:
    | FieldValueNodeMeta
    | StoreValueNodeMeta
    | EffectResultNodeMeta
    | PrimaryValueNodeMeta;
};
