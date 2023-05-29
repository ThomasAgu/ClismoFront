import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  theme: themeReducer,
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
