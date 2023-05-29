// themeReducer.ts

import { Reducer } from 'redux';
import { ThemeAction, ThemeActionTypes } from '../actions/themeActions';
import { lightTheme, darkTheme } from '../../src/themes/themes';

interface ThemeState {
  theme: any; // Cambia "any" por el tipo específico de tu tema
}

const initialState: ThemeState = {
  theme: lightTheme,
};

const themeReducer: Reducer<ThemeState, ThemeAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
