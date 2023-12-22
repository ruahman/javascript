import { createSignal, Component } from "solid-js";

const Button: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Button on: {count()}
    </button>
  );
};

export default Button;
