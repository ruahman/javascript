import { createSignal, createEffect, createRenderEffect } from "solid-js";

export function CreateRenderEffect() {
  const [count, setCount] = createSignal(0);

  // createRenderEffect runs synchronously during the reactive render phase —
  // BEFORE DOM mutations are committed to the screen.
  // createEffect runs AFTER the DOM has been updated.
  createRenderEffect(() => {
    console.log("[createRenderEffect] count =", count(), "— runs before DOM paint");
  });

  createEffect(() => {
    console.log("[createEffect]       count =", count(), "— runs after DOM paint");
  });

  return (
    <>
      <h1>createRenderEffect</h1>
      <p>
        <code>createRenderEffect</code> works like <code>createEffect</code> but
        runs <strong>synchronously during the render phase</strong>, before DOM
        mutations are flushed to the screen. Use it when you need to read or write
        layout before the browser paints (e.g. measuring DOM nodes for animations).
      </p>
      <p>
        For most side-effects, prefer <code>createEffect</code>. Overusing{" "}
        <code>createRenderEffect</code> can block rendering.
      </p>
      <p>count: {count()}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p style={{ color: "#999", "font-size": "0.88rem" }}>
        Open the console — <code>createRenderEffect</code> always logs before{" "}
        <code>createEffect</code>.
      </p>
    </>
  );
}
