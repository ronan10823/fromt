import { useState } from 'react';
import negotiation1 from '../../assets/img/negotiation1.jpg';
import negotiation2 from '../../assets/img/negotiation2.jpg';
import negotiation3 from '../../assets/img/negotiation3.jpg';

function Poster() {
  // useState(): 첫 번째 인자=defaul 값, 두번째 인자=함수
  const [src, setSrc] = useState<string>(negotiation1);

  // 버튼 상태 변화 저장하기 위한 변수
  const [btn, setBtn] = useState<boolean>(true);

  const posters = [negotiation1, negotiation2, negotiation3];

  // 2개는 이거로 되지만, 3개는 안된다. 배열을 이용해야 한다. 어떻게?
  const onToggleHandleld = () => {
    // setSrc(negotiation1)
    // setSrc(negotiation2)
    // setSrc(negotiation3)
    if (btn) {
      setSrc(negotiation1);
      setBtn(false);
    } else if (btn) {
      setSrc(negotiation2);
      setBtn(true);
    } else {
      setSrc(negotiation3);
      setBtn(false);
    }
  };

  return (
    <>
      {/* 버튼 누를 때 사진이 다른 사진으로 바뀌게 하고 싶다.
      그러기 위해서는, img의 src의 상태값이 변경되는 것을 함수로 만들어야 한다. 
      버튼을 눌렀을 때 이미지가 변경되게 하고 싶으면 버튼에 toggle을 사용*/}

      <div className="m-3">
        <div className="mt-8">
          <img src={src} alt="" width={300} height={500} />
          <button
            className="m-2 w-32 bg-blue-500 p-4 text-xl text-white"
            onClick={onToggleHandleld}
          >
            이미지 변경
          </button>
        </div>
      </div>
    </>
  );
}

export default Poster;
