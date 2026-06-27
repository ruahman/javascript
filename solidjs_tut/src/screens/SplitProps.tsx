import { createSignal, splitProps } from "solid-js";

function Greeting(props: any) {
  // you can split props into seperate groups of props.
  const [local, others] = splitProps(props, ["greeting", "name"]);
  return (
    <h3 {...others}>
      {local.greeting} {local.name}
    </h3>
  );
}

export function SplitProps() {
  const [name, setName] = createSignal("Jakob");

  return (
    <>
      <Greeting greeting="Yo" name={name()} style="color: teal;" />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
}
