import { useState } from 'react';
import type { SquareProps } from './types/type';

function Square({ value, handleClick }: SquareProps) {
  // 눌렀을 때 X가 나오거나, X에서 O로 바꿔지는 건 부모가 관리해야 한다. 값을 공유해야 하기 때문.

  // 누르면 X로 변경
  //   const [input, setInput] = useState('');

  // 네모가 클릭되면 X가 나옴
  //   const handleClick = () => setInput('X');

  // 1 square = 1 component
  return (
    <>
      <div className="board-row">
        {/* board의 button이 누른 숫자의 value를 function으로 보내기 */}
        <button className="square" onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
}

export default Square;
