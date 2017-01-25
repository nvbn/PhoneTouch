import { exec } from 'child_process';
import isUndefined from 'lodash/isUndefined';
import controls, { View, Text, Slider } from '../controls';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  slider: {minHeight: 60},
};

const setVolume = (volume) => {
  const intVolume = parseInt(volume, 10);
  exec(`pactl set-sink-volume 0 ${intVolume}%`);
};

export default ({volume}) => {
  if (isUndefined(volume)) {
    return;
  }

  return (
    <View key="pulseaudio-group">
      <Text style={styles.title}
            key="pulseaudiot-title">Volume</Text>
      <Slider minimumValue={0}
              maximumValue={100}
              onValueChange={setVolume}
              value={volume}
              style={styles.slider}
              key="pulseaudio-slide"/>
    </View>
  );
};
