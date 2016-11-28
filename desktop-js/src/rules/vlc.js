import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

export default ({window}) => {
  if (window.title.search('VLC media player') === -1)
    return;

  return (<View key="vlc-group">
    <Text style={{color: '#ffffff', fontSize: 10}}
          key="vlc-title">VLC</Text>
    <View style={{flexDirection: 'row'}}
          key="vlc-icons">
      <TouchableHighlight onPress={() => sendKey('ctrl+Left')}
                          key="vlc-rewind">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="rotate-left"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('space')}
                          key="vlc-play">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="play-arrow"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+Right')}
                          key="vlc-fast-forward">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="rotate-right"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('f')}
                          key="vlc-fullscreen">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="fullscreen"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('m')}
                          key="vlc-mute">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="volume-mute"/>
      </TouchableHighlight>
    </View>
  </View>);
}
