import React, { Component } from 'react';
import { View, TextInput, Text, Button, BackAndroid } from 'react-native';
import * as types from '../../types';
import styles from './styles';

class Settings extends Component {
  props: {
    save: (value: types.Settings) => void,
    back: () => void,
    settings: types.Settings,
  };

  state: {
    url: ?string,
  };

  constructor() {
    super();
    this._saveSettings = this._saveSettings.bind(this);
  }

  componentDidMount() {
    this._backListener = BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.back();
      return true;
    });
  }

  componentWillMount() {
    this.setState({url: this.props.settings.url});
  }

  componentWillUnmount() {
    if (this._backListener) {
      BackAndroid.removeEventListener(this._backListener);
    }
  }

  _saveSettings() {
    this.props.save({url: this.state.url});
    this.props.back();
  }

  render() {
    return (<View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Server URL</Text>
      <TextInput defaultValue={this.state.url}
                 onChangeText={(text) => this.setState({url: text})}/>
      <View style={styles.buttonsHolder}>
        <View style={styles.button}>
          <Button title="Save"
                  onPress={this._saveSettings}/>
        </View>
        <View style={styles.button}>
          <Button title="Cancel"
                  onPress={this.props.back}/>
        </View>
      </View>
    </View>);
  }
}

export default Settings;
