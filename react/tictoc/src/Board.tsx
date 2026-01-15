import { useState } from 'react';
import Square from './Square';
import type { BoardProps, Squares } from './types/type';
import { calcWinner } from './types/util';

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // square의 클릭 시 X, X 클릭 시 O로 변경 (type -> squarestype 설정)
  // const initialSquares: Squares = Array(9).fill(null);
  // squares 라는 변수(각 사각형), 변수 변경하는 함수 setSquares
  // const [squares, setSquares] = useState<Squares>(initialSquares);

  // 승자 관리
  const winner = calcWinner(squares);

  let status: string;
  if (winner) {
    status = 'Winner : ' + winner;
  } else {
    status = 'Next Player : ' + (xIsNext ? 'X' : 'O');
  }

  // 부모가 자식에게 habdleClick 내려줌
  const handleClick = (idx: number) => {
    // 이미 선택된 자리라면 클릭이 안되게 해야함
    // js 에서는 null = false -> squres[idx]에 값이 있으면 true -> return
    if (squares[idx]) return;

    // suqare 값 깊은 복사
    // const coplySquares = [...squares]
    // [null, null, null, null, .... null] (처음 상태-원본)
    // [null, 'X', null, null,  ... null] (+기존 복사본)
    // [null, 'X', null, 'O', ... null] (+이전의 복사본)
    // 이렇게 이전값과 비교해서 상태가 변경되면, 전체를 복사해서 렌더링(변화 감지해야 렌더링, 리액트의 특징)
    const copySquares = squares.slice();

    if (xIsNext) {
      copySquares[idx] = 'X';
    } else {
      copySquares[idx] = 'O';
    }

    // setSquares(copySquares);
    // setXIsNext(!xIsNext);
    onPlay(copySquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

export default Board;
