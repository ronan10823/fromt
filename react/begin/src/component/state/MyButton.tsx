import type React from 'react';

type BtnProps = {
  style: React.CSSProperties;
  count: number;
  onClick: () => void;
};

// 버튼 몇 번 눌렀는지를 적어주고 싶다.
export default function MyButton({ style, count, onClick }: BtnProps) {
  return (
    <>
      {/* btn1, btn2는 각기 개별로 숫자가 올라감 
      -> 함께 숫자를 올리려면 부모에서 관리해야한다. */}
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </>
  );
}
