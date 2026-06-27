import { lazy } from "solid-js";

// lazy load the Greeting component.
// this way vite can split the code into a separate chunk
const Greeting = lazy(() => import("../components/LazyGreeting"));

export function Lazy() {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name="Jake" />
    </>
  );
}
