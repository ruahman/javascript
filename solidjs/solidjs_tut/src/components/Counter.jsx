import { createSignal } from "solid-js";

export default function Counter() {
  let [counter, setCounter] = createSignal(0);
  let [toggle, setToggle] = createSignal(false);
  let [age, setAge] = createSignal(1);

  // create store is preferable
  const [person, setPerson] = createSignal({ name: "John", age: 21 });

  function increment() {
    setCounter(counter() + 1);
  }

  return (
    <div>
      counter: {counter()}
      <button onClick={increment}>increment</button>
    </div>
  );
}
