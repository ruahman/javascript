import { createSignal, Show } from "solid-js";

export function ShowControlFlow() {
  const [loggedIn, setLoggedIn] = createSignal(false);

  // toogle login button
  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <Show when={loggedIn()} fallback={<button onClick={toggle}>Log in</button>}>
      <button onClick={toggle}>Log out</button>
    </Show>
  );
}
