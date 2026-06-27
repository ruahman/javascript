import { lazy, Suspense } from "solid-js";

const Greeting = lazy(async () => {
  // simulate delay
  await new Promise((r) => setTimeout(r, 1000));
  console.log("LazyGreeting loaded");
  return import("../components/LazyGreeting");
});

export function Suspence() {
  return (
    <>
      <h1>Welcome</h1>
      {/* this detects any asyncs and waits untill they return */}
      <Suspense fallback={<p>Loading...</p>}>
        <Greeting name="diego" />
      </Suspense>
    </>
  );
}
