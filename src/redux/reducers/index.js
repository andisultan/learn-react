import { combineReducers } from 'redux';
import articleReducer from './article';
import authReducer from './auth';
import productReducer from './product';

export default combineReducers({
  articleReducer,
  productReducer,
  authReducer
});