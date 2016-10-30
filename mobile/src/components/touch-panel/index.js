import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StatusBar, Slider } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class TouchPanel extends Component {
  constructor() {
    super();
    this._renderControl = this._renderControl.bind(this);
  }

  componentDidMount() {
    this.props.subscribe();
  }

  _renderControl(control) {
    switch (control.type) {
      case 'Button':
        return (
          <TouchableHighlight key={`button-${control.id}`}
                              onPress={() => this.props.interacted(control)}
                              underlayColor="#0f0f0f"
                              style={styles.button}>
            <Icon style={styles.buttonIcon} name={control.icon}/>
          </TouchableHighlight>
        );
      case 'CheckableButton':
        return (
          <TouchableHighlight key={`checkable-button-${control.id}`}
                              onPress={() => this.props.interacted(control)}
                              underlayColor={control.checked ? '#000000' : '#0f0f0f'}
                              style={control.checked ? [styles.button, styles.checked] : styles.button}>
            <Icon style={styles.buttonIcon} name={control.icon}/>
          </TouchableHighlight>
        );
      case 'Slider':
        return (
          <Slider key={`slider-${control.id}`}
                  maximumValue={control.end}
                  minimumValue={control.start}
                  value={control.current}
                  style={styles.slider}
                  onValueChange={(current) => this.props.interacted({
                    ...control, current,
                  })}/>
        );
      case 'Spacer':
        return (
          <View style={styles.button}
                key={control.id} />
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000"/>
        <KeepAwake />
        {this.props.controls.map(this._renderControl)}
      </View>
    );
  }
}

export default TouchPanel;
