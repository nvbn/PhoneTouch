import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import TouchPanel from './TouchPanel';

const store = configureStore();

class PhoneTouch extends Component {
  render() {
    return (
      <Provider store={store}>
        <TouchPanel/>
      </Provider>
    )
  }
}

export default PhoneTouch;
