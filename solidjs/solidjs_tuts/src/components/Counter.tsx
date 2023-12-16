import { onCleanup, createSignal, createEffect, createMemo } from "solid-js";

// calculate fibonacci number but this can be very expensive
function fibonacci(num: number): number {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function Counter() {
  const [count, setCount] = createSignal(0);

  // a function that wraps a signal also becomes a signal.
  // this is called a derived signal.
  const doubleCount = () => count() * 2;

  // this gets called every time count changes,
  // effect creates a side affect for a singnal
  createEffect(() => {
    console.log("The counter is now", count());
  });

  // cache the result of the fibonancci function,
  // only update this when count incresses
  const fib = createMemo(() => {
    console.log("Calculating Fibonacci");
    return fibonacci(count());
  });

  const interval = setInterval(() => setCount((count) => count + 1), 1000);

  onCleanup(() => clearInterval(interval));

  return (
    <>
      <div>Count: {count()}</div>
      <div>Double Count: {doubleCount()}</div>
      <div>
        1. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        2. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        3. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        4. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        5. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        6. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        7. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        8. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        9. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        10. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
    </>
  );
}
