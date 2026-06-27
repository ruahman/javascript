import { createSignal } from "solid-js";
import { createStore, unwrap } from "solid-js/store";

export function Unwrap() {
  const [store, setStore] = createStore({
    user: { name: "Alice", age: 30 },
    tags: ["solid", "reactive"],
  });

  const [snapshot, setSnapshot] = createSignal("");

  function logRaw() {
    // unwrap() strips the reactive proxy and returns the plain JS object.
    // The result is NOT reactive — safe to serialize, log, or pass to
    // external libraries that should not trigger reactivity.
    const raw = unwrap(store);
    const json = JSON.stringify(raw, null, 2);
    console.log("unwrap() result:", raw);
    setSnapshot(json);
  }

  return (
    <>
      <h1>unwrap</h1>
      <p>
        <code>unwrap(store)</code> returns the raw, non-reactive JavaScript object
        behind a store. Useful when you need to serialize data, pass it to a
        non-reactive library, or inspect the actual value without proxy overhead.
      </p>

      <p>
        Name: {store.user.name} | Age: {store.user.age}
      </p>
      <button onClick={() => setStore("user", "age", (a) => a + 1)}>Age +1</button>
      <button onClick={logRaw}>unwrap() → snapshot below</button>

      {snapshot() && (
        <pre
          style={{
            background: "#1a1a1a",
            padding: "1rem",
            "border-radius": "6px",
            "margin-top": "1rem",
            "font-size": "0.85rem",
          }}
        >
          {snapshot()}
        </pre>
      )}
    </>
  );
}
