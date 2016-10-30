import * as constants from './constants';
import db from './db';

// export pair = () => ({
//   type:
// });

export const panelSubscribe = () => (dispath, getState) => {
  const pairId = getState().pairing.id;
  const ref = db.ref(`pair/${pairId}/panel`);

  const update = (snapshot) => {
    const val = snapshot.val();

    if (pairId === getState().pairing.id) {
      dispath(panelUpdated(val ? val.controls : []));
    } else {
      unsubscribe()
    }
  };

  const unsubscribe = ref.on('value', update);
  ref.once('value').then(update);
};

export const panelUpdated = (controls) => ({
  type: constants.ACTION_PANEL_UPDATED,
  controls: controls,
});

export const panelInteracted = (control) => (dispatch, getState) => {
  const pairId = getState().pairing.id;

  db.ref(`pair/${pairId}/interaction/${control.id}`).set({
    ...control,
    last: Date.now(),
  });
};
