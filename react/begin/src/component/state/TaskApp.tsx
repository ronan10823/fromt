import { useEffect, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import type { Task } from '../types/main';

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initialTask = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'lennon Wall pic', done: false },
];
let nextId = 3;

function TaskApp() {
  const [tasks, setTasks] = useState(initialTask);

  // 여행계획 추가
  const handleAddTask = (text: string) => {
    // tasks에 입력한 text를 추가
    // 배열로 만들어야 한다.
    // - 원본에 추가하는 개념이기에, 원본이 필요하다.
    setTasks([
      ...tasks,
      {
        // 입력했을 때 숫자가 자동으로 증가해야 한다. 그러기 위해서는-
        // 우선 지금 당장은 아주 쉽게 - 3으로 값을 고정시키고 1을 추가하도록 한다.
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  // 여행계획 수정
  const handleChangeTask = (task: Task) => {
    console.log('변경', task);
    // 수정할 task 찾기 (수정 대상=task, 수정된 내용=t)
    setTasks(tasks.filter((t) => (t.id === task.id ? { ...t, ...task } : t)));
  };

  // 여행계획 삭제
  const handleDeleteTask = (taskId: number) => {
    // task에서 (ListTask) id에 해당하는 task 제거
    // task에서 id와 일치하지 않는 task 추출해서 새로운 배열 생성 => 이러한 기능을 해주는 애들 : map(), filter()
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // 상태 확인용
  useEffect(() => {
    console.log('업데이트 된 tasks', tasks);
  }, [tasks]);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">가볼 여행지</h2>
          {/* 데이터 입력 */}
          <AddTask onAddTask={handleAddTask} />
          <ListTask
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeTask}
          />
        </div>
      </div>
    </>
  );
}

export default TaskApp;
