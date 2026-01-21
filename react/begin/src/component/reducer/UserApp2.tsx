import { useReducer, useState } from 'react';
import { userReducer } from './userReducer';

export type UserType = {
  name: string;
  year: number;
  warning: string;
};

export const initialUser: UserType = {
  name: '',
  year: 0,
  warning: '',
};

function UserApp2() {
  // const [user, setUser] = useState(initialUser);
  // -> state 대신에 reducer로 관리한다.
  // -> const [state, dispatch] = userReducer(Reducer 함수, 초기값)
  const [user, dispatch] = useReducer(userReducer, initialUser);

  // name, year, warning 분해
  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 2개의 이벤트를 하나의 함수로만 처리하고 있어서, e.target으로 2개의 이벤트를 나눠야 한다.
    const { name, value } = e.target;

    // 목적: 이름, 나이 표시 + 나이(성인 여부 판별, 18세 이하면 경고 메시지)
    // 이름(소문자로 변경 후 보여주기)
    if (name === 'name') {
      dispatch({
        type: 'SET_NAME',
        name: value,
      });
    } else {
      //else 구문에서 나이(18세 이하 경고 처리)
      dispatch({
        type: 'SET_YEAR',
        year: Number(value),
      });
    }
  };

  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (
    <div className="mt-10 flex flex-col items-center px-3 py-2">
      <div className="item-center mr-2 flex w-full gap-3">
        <div>
          <input
            type="text"
            name="name"
            className="flex-1 rounded border px-3 py-2"
            placeholder="Enter name."
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <input
            type="number"
            name="year"
            className="flex-1 rounded border px-3 py-2"
            placeholder="Enter birth year."
            onChange={handleChange}
            value={year}
          />
        </div>
        <button
          type="button"
          onClick={onReset}
          className="py-w rounded bg-orange-500 px-4 text-white"
        >
          reset
        </button>
        <div>
          <ul>
            <li>Name : {name}</li>
            <li>
              Year : {year}{' '}
              {warning && <span className="text-red-500">{warning}</span>}
            </li>
            {/* {warning && ...} = 'warning이라는 상황이 생기면'의 의미 */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserApp2;
