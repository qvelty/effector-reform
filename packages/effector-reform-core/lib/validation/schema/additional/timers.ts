import { WhenNode } from '../conditional';
import { ValidationSchemaNode } from '../primitives';
import { DebounceNode } from './types';

export function debounce(
  node: WhenNode | ValidationSchemaNode,
  timer: number,
): DebounceNode {
  return {
    type: 'debounce',
    meta: {
      node,
      timer,
    },
  };
}
