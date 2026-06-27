import { createSignal, createSelector, For } from "solid-js";

const items = Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Item ${i + 1}` }));

export function CreateSelector() {
  const [selectedId, setSelectedId] = createSignal<number | null>(null);

  // Without createSelector: every list item re-renders when selection changes (O(n)).
  // createSelector returns a boolean-signal factory: isSelected(id) is true only for
  // the selected item. On selection change, ONLY the old + new items update (O(1)).
  const isSelected = createSelector(selectedId);

  return (
    <>
      <h1>createSelector</h1>
      <p>
        <code>createSelector(source)</code> returns a function{" "}
        <code>(key) =&gt; boolean</code> that efficiently tracks whether a specific
        key is the current selection. Without it, changing selection would cause all{" "}
        <code>For</code> items to re-evaluate. With it, only the deselected and
        newly-selected items are notified.
      </p>
      <p>Open the console and watch — only 2 items log on each click:</p>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
        <For each={items}>
          {(item) => {
            console.log(`Checking selection: ${item.name}`);
            return (
              <button
                classList={{ selected: isSelected(item.id) }}
                onClick={() => setSelectedId(item.id)}
              >
                {item.name}
              </button>
            );
          }}
        </For>
      </div>
      <p>
        Selected: <strong>{selectedId() !== null ? items[selectedId()!].name : "none"}</strong>
      </p>
    </>
  );
}
