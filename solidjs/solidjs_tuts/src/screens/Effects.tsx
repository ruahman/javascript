import { createSignal, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export function Effects() {
  // this is a signal for primative types
  const [counter, setCounter] = createSignal(0);

  // this is a store, a signal for objects, or anything that is not a primative type
  const [person, setPerson] = createStore({
    name: {
      first: "Diego",
      last: "Vila",
    },
    age: 42,
  });

  // increment counter every second
  setInterval(() => {
    setCounter(counter() + 1);
  }, 1000);

  // create a side affect that logs the counter every time it changes
  createEffect(() => {
    console.log("log effect " + counter());
  });

  // increase the age of a person
  function AgeIncreas() {
    setPerson("age", person.age + 1);
  }

  // create a side affect that logs the age of the person every time it changes
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
