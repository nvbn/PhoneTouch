import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

export default ({window}) => {
  if (window.title.search('Netflix') === -1)
    return;

  return (<View key="netflix-group">
    <Text style={{color: '#ffffff', fontSize: 10}}
          key="netflix-title">Netflix</Text>
    <View style={{flexDirection: 'row'}}
          key="netflix-icons">
      <TouchableHighlight onPress={() => sendKey('shift+Left')}
                          key="netflix-rewind">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="rotate-left"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('space')}
                          key="netflix-play">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="play-arrow"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('shift+Right')}
                          key="netflix-fast-forward">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="rotate-right"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('f')}
                          key="netflix-fullscreen">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="fullscreen"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('m')}
                          key="netflix-mute">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="volume-mute"/>
      </TouchableHighlight>
    </View>
  </View>);
}
