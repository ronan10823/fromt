export const initialTodos = [
  {
    id: 1,
    title: 'react 기초 알아보기',
    completed: true,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 2,
    title: 'component styling study',
    completed: false,
    important: false,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 3,
    title: '일정 관리 앱 작성',
    completed: false,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
];

// 기본 todo의 타입
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  createDate: Date;
  updateDate: Date;
};

// create 용 (직접 데이터 처리할 때 사용)
export type TodoCreate = Omit<Todo, 'createDate' | 'updateDate'>;

// 서버와 연동하는 데이터 타입
// 입력 / 수정
export type TodoInsert = Omit<Todo, 'id' | 'createDate' | 'updateDate'>;
// 삭제 id(number)
// 조회 (서버로부터 넘어오는 데이터 담기): Todo
export type TodoRead = Omit<Todo, 'createDate' | 'updateDate'>;

// 조회 요청시 parameter 타입
export type boolParam = '' | 'true' | 'false';
export function toCompleteQuery(completed: boolParam): boolParam {
  return completed ? 'true' : 'false';
}

// Todolist 사용할 props
export type Todos = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onChangeTodo: (todo: TodoInsert) => void;
};
