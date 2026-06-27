import { useSearchParams } from "@solidjs/router";

export function UseSearchParams() {
  // useSearchParams reads + writes query-string parameters reactively.
  // Changes update the URL without a full page navigation.
  const [params, setParams] = useSearchParams<{ tab?: string; page?: string }>();

  const page = () => Number(params.page ?? 1);

  return (
    <>
      <h1>useSearchParams</h1>
      <p>
        <code>useSearchParams()</code> returns a reactive tuple of{" "}
        <code>[params, setParams]</code>. Reading <code>params.key</code> is
        reactive — components re-render when the URL changes. <code>setParams</code>{" "}
        merges new values into the existing query string (pass <code>undefined</code>{" "}
        to remove a key).
      </p>

      <h2>Current query string</h2>
      <p>
        tab: <strong>{params.tab ?? "(not set)"}</strong>
      </p>
      <p>
        page: <strong>{page()}</strong>
      </p>

      <h2>Set tab</h2>
      <button onClick={() => setParams({ tab: "all" })}>tab=all</button>
      <button onClick={() => setParams({ tab: "active" })}>tab=active</button>
      <button onClick={() => setParams({ tab: "done" })}>tab=done</button>
      <button onClick={() => setParams({ tab: undefined })}>Remove tab</button>

      <h2>Pagination</h2>
      <button
        onClick={() => setParams({ page: String(Math.max(1, page() - 1)) })}
        disabled={page() <= 1}
      >
        ← Prev
      </button>
      <span style={{ margin: "0 0.75rem" }}>Page {page()}</span>
      <button onClick={() => setParams({ page: String(page() + 1) })}>Next →</button>

      <p style={{ color: "#999", "font-size": "0.88rem", "margin-top": "1rem" }}>
        Watch the address bar — params update without a page reload. Params are
        merged, so setting <code>tab</code> won't clear <code>page</code>.
      </p>
    </>
  );
}
