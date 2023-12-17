import { CounterProvider } from "../context/counter";
import { Counter } from "./Counter";

export function CounterContext() {
  // use context provider to pass counter to children without using props
  return (
    <CounterProvider count={1}>
      <Counter />
    </CounterProvider>
  );
}
