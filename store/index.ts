import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Si deseas utilizar middleware como redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'; // Opcional: Para la extensión de Redux DevTools

import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import themeReducer from './reducers/themeReducer';
import { lightTheme } from '../src/themes/themes';

// Combina todos los reducers en un rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  theme: themeReducer,
  // Otros reducers si los tienes
});

// Define el tipo del estado raíz
export type RootState = ReturnType<typeof rootReducer>;

// Configura el store de Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
