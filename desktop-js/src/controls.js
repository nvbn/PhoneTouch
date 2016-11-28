import isFunction from 'lodash/isFunction';
import uuid from 'uuid';
import { RemoteCallback, Control } from './types';

let callbacks = {};

const prepareProps = (props) => {
  for (const key in props) {
    if (isFunction(props[key])) {
      const callbackId = uuid();
      callbacks[callbackId] = props[key];
      props[key] = {callbackId};
    }
  }

  return props;
};

export const reset = () => {
  callbacks = {};
};

export const runCallback = ({ callbackId, args }: RemoteCallback) => {
  if (callbacks[callbackId]) {
    callbacks[callbackId](...args);
  }
};

// Available components
export const View = 'View';
export const Image = 'Image';
export const Icon = 'Icon';
export const TouchableHighlight = 'TouchableHighlight';
export const Slider = 'Slider';
export const Text = 'Text';

export default (tag, props, ...children): Control =>
  ({tag, props: prepareProps(props), children});
