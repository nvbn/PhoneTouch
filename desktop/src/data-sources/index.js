import isEqual from 'lodash/isEqual';
import { Data } from '../types';
import xdotool from './xdotool';
import pulseaudio from './pulseaudio';
import playerctl from './playerctl';

export const dataSources = [xdotool, pulseaudio, playerctl];

export const subscribe = (interval: number, callback: (data: Data) => void) => {
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
