import { combineReducers } from 'redux';
import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
