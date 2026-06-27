import { createSignal, batch } from "solid-js";

export function Batching() {
  const [firstName, setFirstName] = createSignal("John");
  const [lastName, setLastName] = createSignal("Smith");
  const fullName = () => {
    // this gets called twice if not batched
    // changes to objeservers are syncronous
    console.log("Running FullName");
    return `${firstName()} ${lastName()}`;
  };
  const updateNames = () => {
    console.log("Button Clicked");
    batch(() => {
      setFirstName(firstName() + "n");
      setLastName(lastName() + "!");
    });
  };

  return <button onClick={updateNames}>My name is {fullName()}</button>;
}
