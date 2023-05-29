// themeActions.ts

import { Action } from 'redux';

export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

export interface ChangeThemeAction extends Action {
  type: ThemeActionTypes.CHANGE_THEME;
}

export type ThemeAction = ChangeThemeAction;

export const changeTheme = (): ChangeThemeAction => ({
  type: ThemeActionTypes.CHANGE_THEME,
});
