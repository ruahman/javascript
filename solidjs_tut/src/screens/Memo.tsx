import { createSignal, createMemo } from "solid-js";

function fibonacci(n: number): number {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function Memo() {
  const [count, setCount] = createSignal(0);
  const [name, setName] = createSignal("Alice");

  // createMemo caches its result — recomputes only when reactive
  // dependencies (signals read inside) actually change.
  // Changing `name` will NOT trigger a recompute here.
  const doubled = createMemo(() => {
    console.log("[createMemo] recomputing doubled...");
    return count() * 2;
  });

  // Demonstrates why memoization matters for expensive computations.
  // Without createMemo, every render referencing `fib()` multiple times
  // would re-run fibonacci() each time.
  const fib = createMemo(() => {
    console.log("[createMemo] recomputing fib...");
    return fibonacci(count());
  });

  return (
    <>
      <h1>createMemo</h1>
      <p>
        <code>createMemo</code> creates a cached derived value. Unlike a plain{" "}
        arrow function (<code>{"() => count() * 2"}</code>), it only recomputes
        when its reactive dependencies change. Open the console and observe that
        changing <em>name</em> does <strong>not</strong> recompute either memo.
      </p>

      <div>
        <p>count: {count()}</p>
        <p>doubled (memo): {doubled()}</p>
        <p>fibonacci({count()}): {fib()}</p>
        <p>name: {name()}</p>
      </div>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setName((n) => n + "!")}>Change Name (no memo recompute)</button>

      <p style={{ "margin-top": "1rem", color: "#999", "font-size": "0.88rem" }}>
        <strong>Key difference vs plain derived function:</strong> a plain{" "}
        <code>{"() => fib(count())"}</code> would recompute on every read; a{" "}
        <code>createMemo</code> recomputes only once per dependency change, no
        matter how many times you call it in the template.
      </p>
    </>
  );
}
