import * as constants from '../constants';

const initialState = {
  buttons: [],
};

export default (state = initialState, action) => {
  if (action.type === constants.ACTION_PANEL_UPDATED) {
    return {
      ...state,
      buttons: action.buttons,
    };
  }

  return state;
};
