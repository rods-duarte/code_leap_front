import { combineReducers } from 'redux';
import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
});

export default rootReducer;
