import { createSignal, createMemo, catchError } from "solid-js";

// catchError(tryFn, handleError) is the current API replacing the deprecated onError().
// It wraps a reactive computation in a try/catch without requiring a JSX boundary.
function safeMemo<T>(source: () => T, fallback: T) {
  return catchError(
    () => createMemo(source),
    (err: unknown) => {
      console.log(
        "[catchError] caught:",
        err instanceof Error ? err.message : String(err),
      );
      return () => fallback;
    },
  );
}

export function OnError() {
  const [shouldThrow, setShouldThrow] = createSignal(false);

  // This memo throws when shouldThrow is true.
  // catchError wraps the createMemo call and returns the fallback accessor instead.
  const value = safeMemo(
    () => {
      if (shouldThrow()) throw new Error("Memo threw an error!");
      return "All good ✓";
    },
    "Error caught — see console",
  );

  return (
    <>
      <h1>catchError</h1>
      <p>
        <code>catchError(tryFn, handleError)</code> is the current primitive for
        programmatic error handling in reactive scopes. It wraps a computation and
        calls <code>handleError</code> if it throws — without needing a JSX{" "}
        <code>&lt;ErrorBoundary&gt;</code>. Useful for error logging, analytics, or
        returning a safe fallback value.
      </p>
      <p>
        (The older <code>onError()</code> is deprecated as of SolidJS 1.7 — use{" "}
        <code>catchError</code> instead.)
      </p>
      <p>
        Memo value: <strong>{value?.()}</strong>
      </p>
      <button onClick={() => setShouldThrow((b) => !b)}>
        {shouldThrow() ? "Stop throwing" : "Throw from memo"}
      </button>
      <p style={{ color: "#999", "font-size": "0.88rem" }}>
        Open the console to see <code>catchError</code> fire when the memo throws.
      </p>
    </>
  );
}
