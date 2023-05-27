import { UserAction, UserActionTypes, UserState } from '../actions/types';

const initialState: UserState = {
  user: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionTypes.CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
