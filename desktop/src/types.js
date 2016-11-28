export type RemoteCallback = {
  callbackId: string,
  args?: any[],
};

export type Control = {
  tag: string,
  props: {[key: string]: any},
  children: Control[],
};

export type Data = {[key: string]: any};
