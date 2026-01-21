import type { Task, TaskList } from '../types/main';

type TaskAction =
  | { type: 'ADD'; id: number; text: string; done: boolean } // ADD 넘어올 때는 하나로 넘어온다.
  | { type: 'CHANGE'; task: Task } // change에서는 TaskApp에서 보면 변수가 task:Task이다.
  | { type: 'DELETE'; id: number };

// task: Task[] <- 왜 TaskList가 아니고 Task[]일까? 왜 배열일까?
export function taskReducer(tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case 'ADD':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: action.done,
        },
      ];
    case 'CHANGE':
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case 'DELETE':
      return tasks.filter((task) => task.id !== action.id);
    default:
      throw new Error('Unknown action');
  }
}
