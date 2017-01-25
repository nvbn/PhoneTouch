import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  control: {color: '#ffffff', fontSize: 60},
};

export default ({window}) => {
  if (window.title.search('Netflix') === -1)
    return;

  return (<View key="netflix-group">
    <Text style={styles.title}
          key="netflix-title">Netflix</Text>
    <View style={styles.controlsHolder}
          key="netflix-icons">
      <TouchableHighlight onPress={() => sendKey('shift+Left')}
                          key="netflix-rewind">
        <Icon style={styles.control} name="rotate-left"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('space')}
                          key="netflix-play">
        <Icon style={styles.control} name="play-arrow"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('shift+Right')}
                          key="netflix-fast-forward">
        <Icon style={styles.control} name="rotate-right"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('f')}
                          key="netflix-fullscreen">
        <Icon style={styles.control} name="fullscreen"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('m')}
                          key="netflix-mute">
        <Icon style={styles.control} name="volume-mute"/>
      </TouchableHighlight>
    </View>
  </View>);
}
