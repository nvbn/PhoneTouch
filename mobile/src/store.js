import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default () => {
  const store = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
  )(createStore)(reducers);
  persistStore(store, {storage: AsyncStorage});
  return store;
};
