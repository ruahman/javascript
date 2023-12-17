import { onCleanup, createSignal, Show } from "solid-js";

// this binds to the dom element and gets the value of the accessor
// @ts-ignore
function clickOutside(el: any, accessor: any) {
  const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}

export function Use() {
  const [show, setShow] = createSignal(false);

  return (
    <Show
      when={show()}
      fallback={<button onClick={(_e) => setShow(true)}>Open Modal</button>}
    >
      {/* @ts-ignore */}
      <div class="modal" use:clickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}
