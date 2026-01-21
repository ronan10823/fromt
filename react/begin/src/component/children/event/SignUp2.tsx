import { useState } from 'react';

const SignUp2 = () => {
  // onChange가 일어나면 콘솔에 찍기보다, h3 사이에 message가 나왔으면 좋겠다. 입력값이 바뀔때마다 그 아래에 실시간으로 반영되는 형태를 아래에 보이게 하는거
  // const [message, setMessage] = useState('');
  // 유저 이름도 같이 나왔으면 좋겠다.
  // const [username, setUsername] = useState('');

  // // 2-1. 만약에 점점 더 많은 입력창이 더 나온다면, 한 번에 다루는게 좋겠다. -> 위에 두 개를 모두 묶어야 한다.
  const [form, setForm] = useState({
    message: '',
    username: '',
  });

  // 2.4 return에서 h3 사이에 message나 username을 각각 받기 위해서 구조 분해를 해야 한다.
  const { message, username } = form;

  // 2-2 onChange도 바꿔줘야 한다. value를 가져와야 하지만, e.target.value 형태로는 못가져오기 때문.
  // // 2-5. Change는 무조건 쓰고, submit도 반드시 쓸 수 밖에 없다.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form, // 2.3 무조건 복제해야 한다. 기존의 것을 남겨둬야 리액트에서 리랜더링하면서 화면을 바꿔주기 때문.
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  // 여기에 있는 글자 콘솔에 찍어보고 싶다.
  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="message"
          id=""
          className="border p-2"
          // onChange={(e) => console.log(e.target.value)}
          onChange={onChange}
        />
        <input
          type="text"
          name="username"
          id=""
          className="border p-2"
          onChange={onChange}
        />
        {/* <button type="submit" className="m-2 bg-orange-500 p-2">
          send
        </button> */}
      </form>
      <h3 className="text-2xl">
        {username} : {message}
      </h3>
    </>
  );
};

export default SignUp2;
