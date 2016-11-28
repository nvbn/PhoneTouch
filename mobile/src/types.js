export type Settings = {
  url: string,
};

export type Control = {
  tag: string,
  props: {[key: string]: any},
  children: Control[],
};
