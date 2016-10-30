import { combineReducers } from 'redux';
import pairing from './pairing';
import session from './session';

export default combineReducers({session, pairing});
