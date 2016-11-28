import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

export default () => (<View key="player-group">
  <Text style={{color: '#ffffff', fontSize: 10}}
        key="player-title">Music</Text>
  <View style={{flexDirection: 'row'}}
        key="player-icons">
    <TouchableHighlight onPress={() => sendKey('XF86AudioPrev')}
                        key="player-prev">
      <Icon style={{color: '#ffffff', fontSize: 60}} name="skip-previous"/>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => sendKey('XF86AudioPlay')}
                        key="player-play">
      <Icon style={{color: '#ffffff', fontSize: 60}} name="play-arrow"/>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => sendKey('XF86AudioNext')}
                        key="player-next">
      <Icon style={{color: '#ffffff', fontSize: 60}} name="skip-next"/>
    </TouchableHighlight>
  </View>
</View>);
