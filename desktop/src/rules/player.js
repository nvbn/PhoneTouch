import controls, {
  View,
  TouchableHighlight,
  Icon,
  Text,
  Image
} from '../controls';
import { sendKey } from '../utils';

const styles = {
  title: {color: '#ffffff', fontSize: 10},
  controlsHolder: {flexDirection: 'row'},
  image: {width: 55, height: 55, marginTop: 5},
  control: {color: '#ffffff', fontSize: 60},
};

export default ({playerctl}) => (
  <View key="player-group">
    <Text style={styles.title}
          key="player-title">
      {playerctl && playerctl.title ? `${playerctl.artist} – ${playerctl.title}` : "Music"}
    </Text>
    <View style={styles.controlsHolder}
          key="player-icons">
      {playerctl && playerctl.artUrl ? (
        <Image source={{uri: playerctl.artUrl}}
               style={styles.image}
               key="player-cover" />
        ) : <View key="player-cover" />}
      <TouchableHighlight onPress={() => sendKey('XF86AudioPrev')}
                          key="player-prev">
        <Icon style={styles.control} name="skip-previous"/>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('XF86AudioPlay')}
                          key="player-play">
        <Icon style={styles.control}
              name={playerctl && playerctl.status === 'Playing' ? 'pause' : 'play-arrow'}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => sendKey('XF86AudioNext')}
                          key="player-next">
        <Icon style={styles.control} name="skip-next"/>
      </TouchableHighlight>
    </View>
  </View>
);
