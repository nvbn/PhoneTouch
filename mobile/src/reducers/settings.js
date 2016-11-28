import * as constants from '../constants';

const initialState = {
  url: 'ws://192.168.0.102:9000/',
};

export default (state = initialState, action) => {
  if (action.type === constants.SETTINGS_SAVE) {
    return action.value;
  }

  return state;
};
