// name의 타입 지정 -> type or interface

import React, { use } from 'react';

// 구조분해할당
function Child({ active, onClick }) {
  console.log('child rendered');
  return (
    <>
      <h1 className="text-3xl">Child : {active ? 'Active' : 'Not Active'}</h1>
      <button className="border bg-amber-600 p-3" onClick={onClick}>
        증가
      </button>
    </>
  );
}

export default React.memo(Child);
