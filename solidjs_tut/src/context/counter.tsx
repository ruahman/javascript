import { createSignal, createContext, useContext } from "solid-js";

// create Context
const CounterContext = createContext();

// create Context Provider Component
export function CounterProvider(props: any) {
  const [count, setCount] = createSignal(0);
  const counter = [
    count,
    {
      increment: () => setCount(count() + 1),
      decrement: () => setCount(count() - 1),
    },
  ];
  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
}

// returns the context
export function useCounter() {
  return useContext(CounterContext);
}
