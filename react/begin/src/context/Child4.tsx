import { useToggle } from './useToggle';

function Child4() {
  const context = useToggle();
  const { toggle } = context;

  if (!context) {
    throw new Error('CountProvider null');
  }
  return (
    <>
      <h2>Child4</h2>
      <button className="bg-gray-300 p-3" onClick={toggle}>
        Toggle
      </button>
    </>
  );
}

export default Child4;
