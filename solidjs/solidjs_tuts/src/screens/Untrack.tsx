import { createSignal, createEffect, untrack } from "solid-js";

export function Untrack() {
  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  createEffect(() => {
    // b will no longer trigger side effect
    console.log(a(), untrack(b));
  });

  return (
    <>
      <button onClick={() => setA(a() + 1)}>Increment A</button>
      {/* this won't trigger side effect */}
      <button onClick={() => setB(b() + 1)}>Increment B</button>
    </>
  );
}
