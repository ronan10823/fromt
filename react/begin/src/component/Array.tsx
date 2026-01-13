function Array() {
  //  type or interface

  interface User {
    name: string;
    email: string;
  }

  const user: User = {
    name: 'Jane',
    email: 'jane@example.com',
  };

  // type
  type Item = {
    id: number;
    price: number;
  };

  // Inline 방식
  const colors: string[] = ['red', 'blue', 'green'];
  const numbers: number[] = [1, 2, 3, 4, 5];
  const items: { id: number; price: number }[] = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  // 어떻게 보여줄 것인가?
  // user로는 안된다. 왜? -> user.name이나 user.email이 있어야 한다.
  return (
    <>
      <p>
        user 정보 : {user.name}({user.email})
      </p>
      <p>색상 : {colors[1]} </p>
      {/* 전체 색상 출력 -> map() */}
      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>color:{color}</li>
        ))}
      </ul>
      <h3>Items 조회</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.price}</li>
        ))}
      </ul>
      <h3>numbers 조회</h3>
      <ul>
        {numbers.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
      {/* filter 적용(배열 적용) : 짝수 출력 */}
      <p>{numbers.filter((n) => n % 2 === 0).join(', ')}</p>
      <p>{numbers.map((n) => n % 2).join(', ')}</p>
    </>
  );
}

export default Array;
