import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import propertyReducer from './property';

export default combineReducers({
  router: routerReducer,
  property: propertyReducer,
});
