import * as constants from './constants';

let ws;

export const subscribe = () => (dispath, getState) => {
  const repeat = () => setTimeout(() => subscribe()(dispath, getState), 5000);

  const url = getState().settings.url;

  if (!url) {
    console.warn('Please set url in settings');
    repeat();
    return;
  }

  try {
    ws = new WebSocket(url);
  } catch (e) {
    repeat();
    return;
  }

  ws.onmessage = ({data}) => {
    dispath(updated(JSON.parse(data)));
  };

  ws.onclose = repeat;
  ws.onerror = repeat;
};

export const updated = (controls) => ({
  type: constants.ACTION_PANEL_UPDATED,
  controls: controls,
});

export const callbackCalled = (callback) => (dispatch, getState) => {
  ws.send(JSON.stringify(callback));
};

export const settingsSave = (value) => ({
  type: constants.SETTINGS_SAVE,
  value,
});
