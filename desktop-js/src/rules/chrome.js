import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

export default ({window}) => {
  if (window.title.search('Google Chrome') === -1)
    return;

  return (<View key="chrome-group">
    <Text style={{color: '#ffffff', fontSize: 10}}
          key="chrome-title">Google Chrome</Text>
    <View style={{flexDirection: 'row'}}
          key="chrome-icons">
      <TouchableHighlight onPress={() => sendKey('ctrl+t')}
                          key="chrome-new-tab">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="tab"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+w')}
                          key="chrome-close-tab">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="close"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('alt+Left')}
                          key="chrome-back">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="arrow-back"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('F5')}
                          key="chrome-reload">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="loop"/>
      </TouchableHighlight>
    </View>
  </View>);
}
