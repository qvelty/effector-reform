import {
  arrayFieldSymbol,
  isPrimitiveValue,
  PrimitiveField,
  primitiveFieldSymbol,
  PrimitiveValue,
  ReadyFieldsGroupSchema,
} from '@effector-reform/core';
import { Scope, scopeBind, EventCallable, Store } from 'effector';
import {
  ReactArrayFieldApi,
  ReactFields,
  ReactPrimitiveFieldApi,
} from '../types';

function getStoreValueByScope<U>(store: Store<U>, scope: Scope | null) {
  return scope ? scope.getState(store) : store.getState();
}

function bindEventByScope<U>(event: EventCallable<U>, scope: Scope | null) {
  return scope ? scopeBind(event, { scope }) : event;
}

export function getPrimitiveField<T extends PrimitiveValue>(
  field: PrimitiveField<T>,
  scope: Scope | null,
): ReactPrimitiveFieldApi<T> {
  return {
    value: getStoreValueByScope(field.$value, scope),
    error: getStoreValueByScope(field.$error, scope),
    meta: getStoreValueByScope(field.$meta, scope),
    isDirty: getStoreValueByScope(field.$isDirty, scope),
    isValid: getStoreValueByScope(field.$isValid, scope),
    isFocused: getStoreValueByScope(field.$isFocused, scope),
    onChangeError: bindEventByScope(field.changeError, scope),
    onChange: bindEventByScope(field.change, scope),
    onFocus: bindEventByScope(field.focus, scope),
    onBlur: bindEventByScope(field.blur, scope),
    onChangeMeta: bindEventByScope(field.changeMeta, scope),
  };
}

export function getFields<T extends ReadyFieldsGroupSchema>(
  fields: T,
  scope: Scope | null,
): ReactFields<T> {
  const node: any = {};

  const getStoreValue = <T>($store: Store<T>) =>
    getStoreValueByScope($store, scope);

  const bindEvent = <T>(event: EventCallable<T>) =>
    bindEventByScope(event, scope);

  for (const fieldName in fields) {
    const field = fields[fieldName];

    switch (field.type) {
      case arrayFieldSymbol: {
        node[fieldName] = {
          values: getStoreValue(field.$values).map((item) =>
            isPrimitiveValue(item) ? item : getFields(item, scope),
          ),
          meta: getStoreValue(field.$meta),
          isDirty: getStoreValue(field.$isDirty),
          isValid: getStoreValue(field.$isValid),
          error: getStoreValue(field.$error),
          onChange: bindEvent(field.change),
          onChangeError: bindEvent(field.changeError),
          onReset: bindEvent(field.reset),
          onPush: bindEvent(field.push),
          onSwap: bindEvent(field.swap),
          onMove: bindEvent(field.move),
          onInsert: bindEvent(field.insert),
          onUnshift: bindEvent(field.unshift),
          onRemove: bindEvent(field.remove),
          onPop: bindEvent(field.pop),
          onReplace: bindEvent(field.replace),
          onChangeMeta: bindEvent(field.changeMeta),
        } as ReactArrayFieldApi<any>;

        break;
      }
      case primitiveFieldSymbol: {
        node[fieldName] = {
          value: getStoreValue(field.$value),
          error: getStoreValue(field.$error),
          meta: getStoreValue(field.$meta),
          isDirty: getStoreValue(field.$isDirty),
          isValid: getStoreValue(field.$isValid),
          isFocused: getStoreValue(field.$isFocused),
          onChangeMeta: bindEvent(field.changeMeta),
          onChangeError: bindEvent(field.changeError),
          onChange: bindEvent(field.change),
          onFocus: bindEvent(field.focus),
          onBlur: bindEvent(field.blur),
        } as ReactPrimitiveFieldApi<any>;

        break;
      }
      default: {
        node[fieldName] = getFields(
          fields[fieldName] as ReadyFieldsGroupSchema,
          scope,
        );
      }
    }
  }

  return node;
}
