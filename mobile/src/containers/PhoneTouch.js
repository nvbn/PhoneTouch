import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store';
import * as routes from '../routes';
import TouchPanel from './TouchPanel';
import Settings from './Settings';

const store = configureStore();

class PhoneTouch extends Component {
  constructor() {
    super();
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(route, navigator) {
    if (route.type == routes.SETTINGS.type) {
      return (<Settings navigator={navigator} />);
    } else {
      return (<TouchPanel navigator={navigator} />);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator initialRoute={routes.TOUCH_PANEL}
                   renderScene={this._renderScene}/>
      </Provider>
    )
  }
}

export default PhoneTouch;
