import { createSignal } from "solid-js";

export default function Counter() {
  let [counter, setCounter] = createSignal(0);
  let [toggle, setToggle] = createSignal(false);
  let [age, setAge] = createSignal(1);

  // create store is preferable
  const [person, setPerson] = createSignal({ name: "John", age: 21 });

  setTimeout(() => {
    setCounter(counter() + 100);
  }, 2000);

  setTimeout(() => {
    setToggle((prev) => {
      return !prev;
    });
  }, 3000);

  setInterval(() => {
    setAge((prev) => {
      return prev + 1;
    });
  }, 1000);

  setTimeout(() => {
    // setPerson({ name: "Jane", age: 21 });
    setPerson((prev) => {
      return { ...prev, name: "Diego", age: 42 };
    });
  }, 4000);

  function increment() {
    setCounter(counter() + 1);
  }

  function changeName(e) {
    setPerson((prev) => {
      return { ...prev, name: e.target.value };
    });
  }

  return (
    <div>
      Counter: {counter()}
      <button onClick={increment}>increment</button>
      <div>
        toggle:{toggle() ? "on" : "off"} age: {age()}
        person: {person().name} age: {person().age}
        <lable for="name">name</lable>:{" "}
        <input
          name="name"
          type="text"
          onInput={changeName}
          value={person().name}
        />
      </div>
    </div>
  );
}
