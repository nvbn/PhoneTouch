import React, { Component } from 'react';
import * as reactNativeComponents from 'react-native';
import { View, StatusBar, TouchableHighlight } from 'react-native';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import KeepAwake from 'react-native-keep-awake';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as types from '../../types';
import styles from './styles';


class TouchPanel extends Component {
  props: {
    subscribe: () => void,
    toSettings: () => void,
    controls: types.Control[],
  };

  constructor() {
    super();
    this._renderControl = this._renderControl.bind(this);
    this._prepareArg = this._prepareArg.bind(this);
    this._components = {Icon, ...reactNativeComponents};
  }

  componentDidMount() {
    this.props.subscribe();
  }

  _prepareArg(arg) {
    try {
      JSON.stringify(arg);
      return arg;
    } catch (e) {
      return '';
    }
  }

  _callback(callback) {
    return (...args) => this.props.callbackCalled({
      args: args.map(this._prepareArg),
      ...callback
    })
  }

  _prepareProps(props) {
    if (!props)
      return {};

    for (const key in props) {
      if (isObject(props[key]) && props[key].callbackId) {
        props[key] = this._callback(props[key]);
      }
    }

    return props;
  }

  _prepareChildren(children) {
    if (!children)
      return null;

    children = children.map(this._renderControl);

    if (children.length === 1) {
      return children[0];
    } else {
      return children;
    }
  }

  _renderControl(control) {
    if (isString(control))
      return control;

    const component = this._components[control.tag];
    if (!component) {
      console.warn('Unexpected component type:', control);
      return;
    }

    const props = this._prepareProps(control.props);
    const children = this._prepareChildren(control.children);

    return React.createElement(component, props, children);
  }

  render() {
    const controls = this.props.controls || [];

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000"/>
        <KeepAwake />
        {controls.map(this._renderControl)}
        <TouchableHighlight style={styles.settings}
                            onPress={this.props.toSettings}>
          <Icon name="settings" style={styles.settingsIcon}/>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TouchPanel;
