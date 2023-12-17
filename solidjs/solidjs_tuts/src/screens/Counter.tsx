import { useCounter } from "../context/counter";

export function Counter() {
  // useCounter is a custom hook that returns the counter context
  //
  //@ts-ignore
  const [count, { increment, decrement }] = useCounter();
  return (
    <>
      <div>{count()}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
