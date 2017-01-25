import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  control: {color: '#ffffff', fontSize: 60},
};

export default ({window}) => {
  if (window.title.search('Google Chrome') === -1)
    return;

  return (<View key="chrome-group">
    <Text style={styles.title}
          key="chrome-title">Google Chrome</Text>
    <View style={styles.controlsHolder}
          key="chrome-icons">
      <TouchableHighlight onPress={() => sendKey('ctrl+t')}
                          key="chrome-new-tab">
        <Icon style={styles.control} name="tab"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+w')}
                          key="chrome-close-tab">
        <Icon style={styles.control} name="close"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('alt+Left')}
                          key="chrome-back">
        <Icon style={styles.control} name="arrow-back"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('F5')}
                          key="chrome-reload">
        <Icon style={styles.control} name="loop"/>
      </TouchableHighlight>
    </View>
  </View>);
}
