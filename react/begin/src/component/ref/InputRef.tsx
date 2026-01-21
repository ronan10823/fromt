import { useRef } from 'react';

function InputRef() {
  // Focus Input 버튼을 누르면 입력칸 안에 커서가 깜빡이게 하고싶다.
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="m-5">
        <input type="text" className="border p-4" ref={inputRef} />
        <button className="bg-orange-500 p-4" onClick={handleFocus}>
          Focus Input
        </button>
      </div>
    </>
  );
}

export default InputRef;
