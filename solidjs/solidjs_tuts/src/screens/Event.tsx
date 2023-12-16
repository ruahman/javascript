import { createSignal } from "solid-js";

import "../style.css";

export function Event() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  function handleMouseMove(event: any) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div class="mouse-position" onMouseMove={handleMouseMove}>
      The mouse position is {pos().x} x {pos().y}
    </div>
  );
}
