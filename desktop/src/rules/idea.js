import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

export default ({window}) => {
  if (window.title.search('IntelliJ IDEA') === -1)
    return;

  return (<View key="idea-group">
    <Text style={{color: '#ffffff', fontSize: 10}}
          key="idea-title">IntelliJ IDEA</Text>
    <View style={{flexDirection: 'row'}}
          key="idea-icons">
      <TouchableHighlight onPress={() => sendKey('shift+F10')}
                          key="idea-run">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="play-for-work"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+F5')}
                          key="idea-rerun">
        <Icon style={{color: '#ffffff', fontSize: 60}} name="replay"/>
      </TouchableHighlight>
    </View>
  </View>);
}
