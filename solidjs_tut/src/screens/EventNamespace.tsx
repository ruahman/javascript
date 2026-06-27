import { createSignal, For } from "solid-js";

export function EventNamespace() {
  const [log, setLog] = createSignal<string[]>([]);
  const add = (msg: string) => setLog((l) => [...l.slice(-6), msg]);

  return (
    <>
      <h1>Event Namespaces: on: / oncapture:</h1>
      <p>
        Standard <code>onClick</code> uses SolidJS's <strong>event delegation</strong>
        — one listener at the document root, efficient for many elements. The{" "}
        <code>on:</code> namespace attaches a listener <strong>directly to the element</strong>,
        bypassing delegation. Required for:
      </p>
      <ul>
        <li>Shadow DOM / Web Components (events don't cross shadow boundaries)</li>
        <li>Non-bubbling events (e.g. <code>on:focus</code>)</li>
        <li>Custom events dispatched on specific elements</li>
      </ul>
      <p>
        <code>oncapture:</code> attaches in the <strong>capture phase</strong>{" "}
        (top-down, fires before bubbling handlers).
      </p>

      <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}>
        <button onClick={() => add("onClick  — delegated (at document root)")}>
          onClick (delegated)
        </button>

        {/* on: attaches directly to the element, not at the document root */}
        {/* @ts-ignore — on: namespace requires JSX.CustomEvents declaration */}
        <button on:click={() => add("on:click — direct listener on element")}>
          on:click (direct)
        </button>

        {/* oncapture: fires before bubbling; here the div catches the inner button click */}
        <div
          style={{ border: "1px dashed #555", padding: "0.5rem", "border-radius": "4px" }}
          // @ts-ignore
          oncapture:click={() => add("oncapture:click — capture phase on parent div")}
        >
          <button onClick={() => add("onClick on inner button")}>
            Click me (parent has oncapture:click)
          </button>
        </div>
      </div>

      <h2>Event log</h2>
      <ul style={{ "font-family": "monospace", "font-size": "0.85rem" }}>
        <For each={log()}>{(entry) => <li>{entry}</li>}</For>
      </ul>
    </>
  );
}
