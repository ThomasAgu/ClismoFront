import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
