import type { CounterAction } from '../types/type';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initialState = {
  number: 0,
};

// state로 number에 접근 가능
export const counter = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    // SetCount에서 정의한 것을 정의
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
