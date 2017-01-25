import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  control: {color: '#ffffff', fontSize: 60},
};

export default ({window}) => {
  if (window.title.search('IntelliJ IDEA') === -1)
    return;

  return (<View key="idea-group">
    <Text style={styles.title}
          key="idea-title">IntelliJ IDEA</Text>
    <View style={styles.controlsHolder}
          key="idea-icons">
      <TouchableHighlight onPress={() => sendKey('shift+F10')}
                          key="idea-run">
        <Icon style={styles.control} name="play-for-work"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('ctrl+F5')}
                          key="idea-rerun">
        <Icon style={styles.control} name="replay"/>
      </TouchableHighlight>
    </View>
  </View>);
}
