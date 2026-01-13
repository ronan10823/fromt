// import './App.css';
import Array from './component/Array';
import Hello from './component/Hello';
import MyComponent from './component/MyComponent';

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // 단위 생략 => 기본 px
  };

  const getGretting = (name: string): string => `Hello!! ${name}`;
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString();
  };
  // <> </> : React fragment라고 부른다. -> 화면에서는 표시되지 않음
  //          여러 개의 요소를 하나로 묶기 위해 사용

  // html
  return (
    <>
      <label htmlFor=""></label>
      <input type="text" name="" id="" readOnly maxLength={5} />
      <p className="">{getGretting('Alice')}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>
        {/* tsx에서 화살표 함수를 바로 사용할 수도 있다. */}
        Good
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? 'morning' : 'afternoon!';
        })()}
      </p>
      <Hello></Hello>
      {/* 주석 */}
      <MyComponent></MyComponent>
      <div style={{ color: 'red', fontSize: '25px' }}>{name}</div>
      {/* if ~ else : 삼항 연산자 */}
      {name === 'react' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
      {/* 특정 조건을 만족할 때만 내용을 보여주고, 만족하지 않았을 때 아무것도 안 함 구현 시 && 사용 */}
      {name === 'react' && <h1>리액트입니다.</h1>}
      <p style={style}>name:{name ?? <em>No Name</em>}</p>
      <p>name:{name || <em>Empty</em>}</p>
      <Array />
    </>
  );
}

export default App;
