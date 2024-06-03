import { ObjectNode } from '../schema';

export function compile<Values>(schema: ObjectNode) {
  return (values: Values) => {};
}
