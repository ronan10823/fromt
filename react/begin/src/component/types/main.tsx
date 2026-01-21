export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskList = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onChangeTask: (task: Task) => void;
};

// task, onDeleteTask, onChangeTask
// task만 다르고, 나머지 둘은 동일!
// 기존에 선언된 타입에서 제외한(Omit) 타입 선언
export type TaskItem = Omit<TaskList, 'tasks'> & {
  task: Task;
};
