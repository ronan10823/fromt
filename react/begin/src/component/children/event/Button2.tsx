import type { ReactNode } from 'react';

function AlertButton({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  return (
    <button className="bg-orange-500 p-4" onClick={() => alert(message)}>
      {children}
    </button>
  );
}
// Children(play movie, upload image)를 button의 내용으로 띄우고 싶다.

function Button2() {
  // 버튼이 클릭되면 alert('버튼 클릭')
  return (
    <>
      <AlertButton message={'playing'}> Play Movie </AlertButton>
      <AlertButton message={'uploading'}> Upload Image </AlertButton>
    </>
  );
}

export default Button2;
