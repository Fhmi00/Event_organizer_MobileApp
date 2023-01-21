import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import booking from './booking';
import dataOrder from './dataOrder';
import event from './event';

export default combineReducers({
  auth,
  user,
  booking,
  dataOrder,
  event,
});
