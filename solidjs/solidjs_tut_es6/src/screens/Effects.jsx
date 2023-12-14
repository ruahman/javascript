import { createSignal, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export default function Effects() {
  const [counter, setCounter] = createSignal(0);

  const [person, setPerson] = createStore({
    name: {
      first: "Diego",
      last: "Vila",
    },
    age: 42,
  });

  setInterval(() => {
    setCounter(counter() + 1);
  }, 1000);

  createEffect(() => {
    console.log("log effect " + counter());
  });

  function AgeIncreas() {
    setPerson("age", person.age + 1);
  }

  createEffect(() => {
    console.log("my age: ", person.age);
  });

  return (
    <>
      <h1>Effects screeen</h1>
      <p>counter: {counter()}</p>
      <p>{person.name.first}</p>
      <p>{person.name.last}</p>
      <p>{person.age}</p>
      <button onClick={AgeIncreas}>age</button>
    </>
  );
}
