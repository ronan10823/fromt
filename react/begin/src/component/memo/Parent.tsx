import { useCallback, useState } from 'react';
import Child from './Child';

const style = {
  height: '300px',
  backgroundColor: 'lightgray',
};

function Parent() {
  const [count1, setCount1] = useState(0);
  const [active, setActive] = useState(false);

  console.log('parent rendered');

  // 이렇게 되면 리렌더링될 때마다 자식이 포함된 부모가 전체 리렌더링된다.
  // const handleClick = () => setCount1(count1 + 1);
  // useCallback(): 두 번째 배열에 포함된 값이 바뀌지 않는 한, props로 전달되는 함수를 재생성하지 말기
  const handleClick = useCallback(() => setCount1(count1 + 1), []);

  return (
    <>
      <div>
        <h3 className="text-xl">Parent {count1}</h3>
        <button className="border bg-amber-600 p-3" onClick={handleClick}>
          +
        </button>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setActive(!active)}
        >
          Active 변경
        </button>
        <Child active={active} onClick={handleClick} />
      </div>
    </>
  );
}

export default Parent;
