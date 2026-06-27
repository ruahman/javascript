import { createSignal, createDeferred } from "solid-js";

export function CreateDeferred() {
  const [text, setText] = createSignal("");

  // createDeferred returns a read-only signal that mirrors `text` but updates
  // lazily — only when the browser is idle (or after timeoutMs).
  // Useful to avoid blocking the main thread for expensive derived work.
  const deferred = createDeferred(text, { timeoutMs: 600 });

  return (
    <>
      <h1>createDeferred</h1>
      <p>
        <code>createDeferred</code> creates a read signal that defers its update
        until the browser is idle (using <code>requestIdleCallback</code> or a{" "}
        <code>setTimeout</code> fallback with <code>timeoutMs</code>). It lets you
        keep the UI responsive while deferring heavy derived computations.
      </p>
      <p>Type quickly and watch the deferred value lag behind:</p>
      <input
        style={{ display: "block", padding: "0.4rem", "font-size": "1rem", width: "260px" }}
        onInput={(e) => setText(e.currentTarget.value)}
        placeholder="Type here…"
      />
      <p>
        Immediate: <strong>"{text()}"</strong>
      </p>
      <p>
        Deferred (idle / 600ms): <strong>"{deferred()}"</strong>
      </p>
    </>
  );
}
