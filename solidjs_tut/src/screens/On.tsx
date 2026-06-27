import { createSignal, createEffect, on } from "solid-js";

export function On() {
  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  // only runs effect on a. b is not tracked
  createEffect(
    on(
      a,
      (a) => {
        console.log(a, b());
      },
      { defer: true },
    ),
  );

  return (
    <>
      <button onClick={() => setA((a) => a + 1)}>Increment A</button>
      <button onClick={() => setB((b) => b + 1)}>Increment B</button>
    </>
  );
}
