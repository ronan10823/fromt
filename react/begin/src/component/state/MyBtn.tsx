import { useState } from 'react';
import MyButton from './MyButton';

// 2개의 버튼 스타일 지정 후 자식에게 전달
export default function MyBtn() {
  // 버튼 스타일 지정
  const btn1 = {
    padding: '16px',
    background: 'red',
  };
  const btn2 = {
    padding: '16px',
    background: 'gray',
  };

  // 1씩 올라가는 화면을 관리하기 위해서 useState
  const [count, setCount] = useState(0);
  // 버튼 눌렀을 때 숫자가 올라가는 이벤트 걸어주기
  const onClick = () => setCount(count + 1);

  // 버튼 스타일 적용 (적용하는 방법을 알아야 한다!)
  // 1. props (옆에 쓰면 props) : style = {btn1}
  // 2. child (태그 <> 안에 쓰면 child)
  return (
    <>
      <div className="m-5">
        <h1 className="text-3xl">Counters that update separately</h1>
        <MyButton style={btn1} count={count} onClick={onClick} />
        <MyButton style={btn2} count={count} onClick={onClick} />
      </div>
    </>
  );
}
