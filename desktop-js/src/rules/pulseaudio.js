import { exec } from 'child_process';
import isUndefined from 'lodash/isUndefined';
import controls, { View, Text, Slider } from '../controls';

const setVolume = (volume) => {
  const intVolume = parseInt(volume, 10);
  exec(`pactl set-sink-volume 0 ${intVolume}%`);
};

export default ({volume}) => {
  if (isUndefined(volume))
    return;

  return (<View key="pulseaudio-group">
    <Text style={{color: '#ffffff', fontSize: 10}}
          key="pulseaudiot-title">Volume</Text>
    <Slider minimumValue={0}
            maximumValue={100}
            onValueChange={setVolume}
            value={volume}
            style={{minHeight: 60}}
            key="pulseaudio-slide"/>
  </View>);
};
