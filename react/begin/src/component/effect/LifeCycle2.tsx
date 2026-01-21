import { useEffect, useState } from 'react';

function LifeCycle2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('1.Mounted');

    return () => console.log('3.Unmounted');
  }, [count1, count2]);

  const handleClick = () => {};
  console.log('---- Rendering ----');
  return (
    <>
      <div className="mx-3 mt-10 flex p-3">
        <h3 className="text-x1">{count1}</h3>
        <button className="border p-2" onClick={() => setCount1(count1)}>
          Count 1++
        </button>
        <h3 className="text-x1">{count2}</h3>
        <button className="border p-2" onClick={() => setCount1(count2)}>
          Count 2++
        </button>
      </div>
    </>
  );
}

export default LifeCycle2;
