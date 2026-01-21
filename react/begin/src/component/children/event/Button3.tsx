import type { ReactNode } from 'react';

function PlayButton({ moviename }: { moviename: string }) {
  // 영화명 출력 : Playing 악마는 프라다를 입는다
  const handlePlayClick = () => alert(`Playing ${moviename}`);

  // 버튼 클릭 시, 영화명 나오게 하기
  return <Button3 onClick={handlePlayClick}>Play "{moviename}" </Button3>;
}

function UploadButton() {
  const handleUploadClick = () => alert(`Uploading!`);

  return <Button3 onClick={handleUploadClick}>Upload Image</Button3>;
}

// Button3는 함수( () => alert(`Playing '))를 받아야 한다.
// 그래서 Button은 함수와 children을 받아내야 한다.
function Button3({ onClick, children }: Button3Props) {
  // 버튼이 클릭되면 alert('버튼 클릭')

  return (
    <>
      <button className="bg-orange-500 p-4" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

type Button3Props = {
  onClick: () => void;
  children: ReactNode;
};

function Toolbar() {
  return (
    <>
      <PlayButton moviename={'악마는 프라다를 입는다'} />
      <UploadButton />
    </>
  );
}

export default Toolbar;
