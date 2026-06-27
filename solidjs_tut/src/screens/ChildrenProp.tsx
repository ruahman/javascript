import { createSignal, createEffect, children, For } from "solid-js";

function ColoredList(props: any) {
  // you can't use props.children directly you will end up createing more children.
  // it makes a memo of the children.
  const c = children(() => props.children);

  // every time props.color changes, this effect will run
  createEffect(() =>
    // when you loop through the children, you can't just use props.children since it will create more children.
    // you need to create a memo of the children.  which is what the children function does.
    // @ts-ignore
    c().forEach((item: any) => (item.style.color = props.color)),
  );

  return <>{c()}</>;
}

export function ChildrenProp() {
  const [color, setColor] = createSignal("purple");

  return (
    <>
      <ColoredList color={color()}>
        <For each={["Most", "Interesting", "Thing"]}>
          {(item) => <div>{item}</div>}
        </For>
      </ColoredList>
      <button onClick={() => setColor("teal")}>Set Color</button>
    </>
  );
}
