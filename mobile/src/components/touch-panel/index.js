import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StatusBar } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class TouchPanel extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#000000"
        />
        <KeepAwake />
        {this.props.buttons.map((button) => (
          <TouchableHighlight key={`button-${button.id}`}
                              onPress={() => this.props.clicked(button)}
                              underlayColor="#0f0f0f"
                              style={styles.button}>
            <Icon style={styles.buttonIcon} name={button.icon}/>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

export default TouchPanel;
