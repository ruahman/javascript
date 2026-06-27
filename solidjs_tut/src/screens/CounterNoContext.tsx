import counter from "../store/counter";

export function CounterNoContext() {
  const { count, doubleCount, increment } = counter;
  return (
    <button type="button" onClick={increment}>
      {count()} {doubleCount()}
    </button>
  );
}
