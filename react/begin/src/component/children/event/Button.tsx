function Button() {
  // 버튼이 클릭되면 alert('버튼 클릭')
  // 방법1. 함수 만들기
  // 방법2. 간단하면 button 태그 내부에 작성
  return (
    <>
      {/* <button className="bg-orange-500 p-4" onClick={() => alert('버튼 클릭')}>
        버튼
      </button> */}
      <button className="bg-orange-500 p-4" onClick={() => alert('버튼 클릭')}>
        버튼
      </button>
    </>
  );
}

export default Button;
