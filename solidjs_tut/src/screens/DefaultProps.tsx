import { createSignal, mergeProps } from "solid-js";

function Greeting(props: any) {
  // this is how you give default values to props
  const merged = mergeProps({ greeting: "Hi", name: "John" }, props);

  return (
    <h3>
      {merged.greeting} {merged.name}
    </h3>
  );
}

export function DefaultProps() {
  const [name, setName] = createSignal();

  return (
    <>
      <Greeting greeting="Hello" />
      <Greeting name="Jeremy" />
      <Greeting name={name()} />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
}
