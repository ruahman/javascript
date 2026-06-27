import { SuspenseList, Suspense, createResource, createSignal } from "solid-js";

function AsyncPanel(props: { label: string; ms: number; version: number }) {
  // Re-fetch whenever version changes (triggered by "Reload" button)
  const [data] = createResource(
    () => props.version,
    async () => {
      await new Promise((r) => setTimeout(r, props.ms));
      return props.label;
    },
  );

  return (
    <div
      style={{
        padding: "0.6rem 1rem",
        border: "1px solid #444",
        "border-radius": "6px",
        "margin-bottom": "0.5rem",
      }}
    >
      ✓ {data()} loaded
    </div>
  );
}

export function SuspenseListScreen() {
  const [version, setVersion] = createSignal(1);

  return (
    <>
      <h1>SuspenseList</h1>
      <p>
        <code>SuspenseList</code> coordinates the reveal order of multiple{" "}
        <code>Suspense</code> boundaries inside it.
      </p>
      <ul>
        <li>
          <code>revealOrder="forwards"</code> — panels appear top-to-bottom even
          if later ones finish loading first.
        </li>
        <li>
          <code>revealOrder="together"</code> — all panels wait and appear
          simultaneously.
        </li>
        <li>
          <code>tail="collapsed"</code> — only show the next pending fallback
          (not all pending fallbacks at once).
        </li>
      </ul>
      <p>
        Panel A takes 1.5 s, B takes 0.5 s, C takes 0.2 s — but with{" "}
        <code>revealOrder="forwards"</code> they always appear A → B → C.
      </p>
      <button onClick={() => setVersion((v) => v + 1)}>Reload panels</button>

      <div style={{ "margin-top": "1rem" }}>
        <SuspenseList revealOrder="forwards" tail="collapsed">
          <Suspense fallback={<p>⏳ Loading Panel A (1.5 s)…</p>}>
            <AsyncPanel label="Panel A" ms={1500} version={version()} />
          </Suspense>
          <Suspense fallback={<p>⏳ Loading Panel B (0.5 s)…</p>}>
            <AsyncPanel label="Panel B" ms={500} version={version()} />
          </Suspense>
          <Suspense fallback={<p>⏳ Loading Panel C (0.2 s)…</p>}>
            <AsyncPanel label="Panel C" ms={200} version={version()} />
          </Suspense>
        </SuspenseList>
      </div>
    </>
  );
}
