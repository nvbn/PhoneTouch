import { exec } from 'child_process';
import { chain, last } from 'lodash';

const getVolume = (callback) =>
  exec('pactl list sinks', (error, stdout, stderr) => {
    const lines = stdout.split('\n');
    const volume = chain(lines)
      .filter((line) => line.search('Volume') !== -1)
      .flatMap((line) => line.split(' '))
      .filter((part) => last(part) === '%')
      .map((part) => parseInt(part, 10))
      .first()
      .value();
    callback(volume);
  });

export default (interval, callback) => exec('pactl -h', (error) => {
  if (error) {
    return;
  }

  setInterval(
    () => getVolume((volume) => callback({volume})),
    interval);
});
