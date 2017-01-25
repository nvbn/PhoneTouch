import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  control: {color: '#ffffff', fontSize: 60}
};

export default ({window}) => {
  if (window.title.search('VLC media player') === -1)
    return;

  return (<View key="vlc-group">
    <Text style={styles.title}
          key="vlc-title">VLC</Text>
    <View style={styles.controlsHolder}
          key="vlc-icons">
      <TouchableHighlight onPress={() => sendKey('ctrl+Left')}
                          key="vlc-rewind">
        <Icon style={styles.control} name="rotate-left"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('space')}
                          key="vlc-play">
        <Icon style={styles.control} name="play-arrow"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+Right')}
                          key="vlc-fast-forward">
        <Icon style={styles.control} name="rotate-right"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('f')}
                          key="vlc-fullscreen">
        <Icon style={styles.control} name="fullscreen"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('m')}
                          key="vlc-mute">
        <Icon style={styles.control} name="volume-mute"/>
      </TouchableHighlight>
    </View>
  </View>);
};
