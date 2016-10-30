import * as constants from '../constants';

const initialState = {
  controls: [],
};

export default (state = initialState, action) => {
  if (action.type === constants.ACTION_PANEL_UPDATED) {
    return {
      ...state,
      controls: action.controls,
    };
  }

  return state;
};
