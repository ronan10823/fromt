import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Square from './Square';
import Board from './Board';
import type { Squares } from './types/type';

function App() {
  // X or O 번갈아 처리하기 위한 변수 :  X, O로 변경 => true/false로 관리
  const [xIsNext, setXIsNext] = useState<Boolean>(true);

  // history 관리 
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
  // 이전 history 변수
  const currentSquares = history[history.length - 1];
  const handlePlay = (nextSquare:Squares){
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <ul>
          <li>게임 기록</li>
        </ul>
      </div>
    </>
  );
}

export default App;
