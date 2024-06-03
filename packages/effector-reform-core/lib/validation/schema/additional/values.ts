import { Effect, Store } from 'effector';
import { ValueNode } from './types';

export function store($store: Store<any>): ValueNode {
  return {
    type: 'value',
    meta: {
      type: 'store',
      $store,
    },
  };
}

export function effect(fx: Effect<any, any>, params: any): ValueNode {
  return {
    type: 'value',
    meta: {
      type: 'effect',
      effect: fx,
      params,
    },
  };
}

export function primary(value: any): ValueNode {
  return {
    type: 'value',
    meta: {
      type: 'primary',
      value,
    },
  };
}

export function get(path: string): ValueNode {
  return {
    type: 'value',
    meta: {
      type: 'field',
      path,
    },
  };
}
