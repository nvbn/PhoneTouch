import isEqual from 'lodash/isEqual';
import xdotool from './xdotool';
import pulseaudio from './pulseaudio';

export const dataSources = [xdotool, pulseaudio];

export const subscribe = (interval, callback) => {
  let data = {};
  const update = (dataPart) => {
    const newData = {...data, ...dataPart};

    if (!isEqual(newData, data)) {
      data = newData;
      callback(data);
    }
  };

  for (const source of dataSources) {
    source(interval, update);
  }
};
