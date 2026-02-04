// action type 정의
export type CounterAction =
  | { type: 'counter/INCREASE' }
  | { type: 'counter/DECREASE' };

// todos action type 정의
export type TodosAction =
  | { type: 'todos/INSERT'; input: string }
  | { type: 'todos/TOGGLE' }
  | { type: 'todos/DELETE' };

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
