import { useState } from 'react';

function Say() {
  // useState(): 첫 번째 인자=defaul 값, 두번째 인자=함수
  const [message, setMessage] = useState<string>('');

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <>
      {/* 버튼 누를 때 인삿말 나오게 하기(입장-안녕하세요, 퇴장-안녕히가세요) */}

      <div className="m-3">
        <div className="mt-8">
          <button
            className="m-2 w-32 bg-blue-500 p-4 text-xl text-white"
            onClick={onClickEnter}
          >
            입장
          </button>
          <button
            className="m-2 w-32 bg-orange-500 p-4 text-xl text-white"
            onClick={onClickLeave}
          >
            퇴장
          </button>
        </div>
        <div>
          {/* 버튼을 눌렀을 때 글자(출력된 글자-?)의 색상 변화 
          왜 스타일의 오른쪽항에 {{}} 이렇게 두 번 쓰였는가? */}
          <h1 className="p-2 text-3xl" style={{ color }}>
            {message}
          </h1>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-red-600"
            onClick={() => setColor('red')}
          >
            빨강
          </button>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-green-600"
            onClick={() => setColor('green')}
          >
            초록
          </button>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-blue-600"
            onClick={() => setColor('blue')}
          >
            파랑
          </button>
        </div>
      </div>
    </>
  );
}

export default Say;
