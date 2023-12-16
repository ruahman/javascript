import { createSignal } from "solid-js";
import solidLogo from "../assets/solid.svg";
import viteLogo from "/vite.svg";
import { Counter } from "../components/Counter";
import { Nested } from "../components/Nested";

export const Home = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
      <Counter />
      <Nested />
    </>
  );
};
