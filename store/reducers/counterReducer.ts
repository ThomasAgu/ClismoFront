import { CounterAction, CounterActionTypes, CounterState } from '../actions/types';

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
