// name의 타입 지정 -> type or interface
type ChildProps = {
  name: string;
  color: string;
  age: number;
};

// 구조분해할당
function Child({ name, color, age = 20 }: ChildProps) {
  // function Child(props: ChildProps) {
  name += 'from Parent';
  // props.name += 'from Parent';

  return (
    <>
      <h1 className="text-3xl">자식 컴포넌트</h1>
      {/* <h2 className="text-xl">{props.name}</h2>
      <h2 className="text-xl">{props.color}</h2> */}
      <h2 className="text-xl">{name}</h2>
      <h2 className="text-xl">{color}</h2>
      <h2 className="text-xl">{age}</h2>
    </>
  );
}

export default Child;
