import controls, { View, TouchableHighlight, Icon, Text } from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  control: {color: '#ffffff', fontSize: 60},
};

export default () => (<View key="player-group">
  <Text style={styles.title}
        key="player-title">Music</Text>
  <View style={styles.controlsHolder}
        key="player-icons">
    <TouchableHighlight onPress={() => sendKey('XF86AudioPrev')}
                        key="player-prev">
      <Icon style={styles.control} name="skip-previous"/>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => sendKey('XF86AudioPlay')}
                        key="player-play">
      <Icon style={styles.control} name="play-arrow"/>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => sendKey('XF86AudioNext')}
                        key="player-next">
      <Icon style={styles.control} name="skip-next"/>
    </TouchableHighlight>
  </View>
</View>);
