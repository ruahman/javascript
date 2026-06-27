export const Home = () => {
  return (
    <>
      <h1>SolidJS Feature Guide</h1>
      <p>
        A comprehensive tour of SolidJS built with Vite + TypeScript. Use the sidebar
        to navigate each feature — every page is an interactive, runnable example.
      </p>

      <h2>What's covered</h2>
      <ul>
        <li>
          <strong>Reactivity</strong> — <code>createSignal</code>,{" "}
          <code>createMemo</code>, <code>createEffect</code>
        </li>
        <li>
          <strong>Stores</strong> — <code>createStore</code>, <code>produce()</code>,
          nested reactivity
        </li>
        <li>
          <strong>Control Flow</strong> — <code>Show</code>, <code>For</code>,{" "}
          <code>Index</code>, <code>Switch/Match</code>, <code>Dynamic</code>
        </li>
        <li>
          <strong>Component Patterns</strong> — <code>mergeProps</code>,{" "}
          <code>splitProps</code>, <code>children()</code>, spread props
        </li>
        <li>
          <strong>DOM &amp; Events</strong> — refs, events, inline styles,{" "}
          <code>classList</code>, portals, custom directives
        </li>
        <li>
          <strong>Lifecycle</strong> — <code>onMount</code>, <code>onCleanup</code>,{" "}
          <code>ErrorBoundary</code>, lazy loading, <code>Suspense</code>
        </li>
        <li>
          <strong>Context &amp; Global State</strong> — <code>createContext</code>,{" "}
          <code>createRoot</code> store
        </li>
        <li>
          <strong>Advanced Reactivity</strong> — <code>batch()</code>,{" "}
          <code>untrack()</code>, <code>on()</code>
        </li>
        <li>
          <strong>Async &amp; Data</strong> — <code>createResource</code>,{" "}
          <code>useTransition</code>, router + data fetching
        </li>
      </ul>

      <p style={{ color: "#999", "font-size": "0.88rem" }}>
        Start with <strong>Hello World</strong> in the sidebar and work your way down,
        or jump to any topic that interests you.
      </p>
    </>
  );
};
