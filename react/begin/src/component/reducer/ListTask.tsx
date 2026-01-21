import { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import type { TaskItem, TaskList } from '../types/main';

function TaskItem({ task, onDeleteTask, onChangeTask }: TaskItem) {
  const [isDone, setIsDone] = useState(task.done);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);
  // 상태 관리 시작했으니

  // tasks.done = true 이면 MdOutlineCheckBox
  const CheckboxIcon = isDone ? MdOutlineCheckBox : MdCheckBoxOutlineBlank;

  // 여기에서만 쓰는 함수, 부모 요소과 관계 없음
  const taskDoneChange = () => {
    setIsDone(!isDone);

    // 기존 내용 변경
    onChangeTask({
      ...task,
      done: !isDone,
    });
  };

  const taskTextChange = () => {
    // 기존 text 변경
    onChangeTask({
      ...task,
      text: text,
    });
    //원래대로 span으로 변경, edit 버튼으로 변경
    setIsEdit(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="item-center mr-2 flex w-full gap-3">
          <CheckboxIcon onClick={taskDoneChange} />
          {isEdit ? (
            <input
              type="text"
              className="w-full border p-3"
              placeholder="할 일을 입력하세요"
              value={text} // inpit에 있는 시람들 주의
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <span className="flex items-center gap-2">{task.text}</span>
          )}
        </div>
        <div className="item-center flex gap-3">
          {isEdit ? (
            <button
              type="button"
              className="rounded border px-4 py-2 text-green-600"
              onClick={taskTextChange}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="rounded border px-4 py-2 text-green-600"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="rounded border px-4 py-2 text-red-600"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function ListTask({ tasks, onDeleteTask, onChangeTask }: TaskList) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onChangeTask={onChangeTask}
        />
      ))}
    </>
  );
}

export default ListTask;
