import { Dynamic } from "solid-js/web";
import { createSignal, For, JSX } from "solid-js";

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

type Options = {
  [key: string]: () => JSX.Element;
};

const options: Options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
};

// dynamically render a component
export function DynamicScreen() {
  const [selected, setSelected] = createSignal("red");

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
    </>
  );
}
