// actions/types.ts

export interface CounterState {
    count: number;
  }
  
  export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
  }
  
  export interface IncrementAction {
    type: CounterActionTypes.INCREMENT;
  }
  
  export interface DecrementAction {
    type: CounterActionTypes.DECREMENT;
  }
  
  export type CounterAction = IncrementAction | DecrementAction;
  
  //
  // actions/types.ts

export interface UserState {
    user: User | null;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export enum UserActionTypes {
    SET_USER = 'SET_USER',
    CLEAR_USER = 'CLEAR_USER',
  }
  
  export interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload: User;
  }
  
  export interface ClearUserAction {
    type: UserActionTypes.CLEAR_USER;
  }
  
  export type UserAction = SetUserAction | ClearUserAction;
  
  
 