import { createSignal, For } from "solid-js";

export function ForScreen() {
  const [cats, _setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  // a for component is the best way to loop over an array of objects,
  // as the array changes For updates or move items in the dom rather than
  // recreating them
  return (
    <ul>
      <For each={cats()}>
        {(cat, i) => (
          <li>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${cat.id}`}
            >
              {i() + 1}: {cat.name}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}
