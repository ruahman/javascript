import { createSignal } from "solid-js";

const safeHtml = `<strong>Bold</strong>, <em>italic</em>, <u>underline</u>, and
<a href="#" style="color:#646cff">a link</a>.`;

const dangerExample = `<img src="x" onerror="alert('XSS!')">`;

export function InnerHTML() {
  const [useRaw, setUseRaw] = createSignal(true);
  const [text, setText] = createSignal("5 > 3 && chars like <, > & \" are safe here");

  return (
    <>
      <h1>innerHTML / textContent</h1>
      <p>
        SolidJS auto-escapes all JSX expressions to prevent XSS. Two escape
        hatches exist for when you need raw control:
      </p>

      <h2>
        <code>innerHTML</code>
      </h2>
      <p>
        Sets raw HTML on an element. Only use with content you control or have
        sanitized — it bypasses XSS protection.
      </p>
      <button onClick={() => setUseRaw((b) => !b)}>
        Toggle: {useRaw() ? "safe HTML" : "⚠ XSS example"}
      </button>
      <div
        style={{
          background: "#1a1a1a",
          padding: "1rem",
          "border-radius": "6px",
          "margin-top": "0.5rem",
        }}
        innerHTML={useRaw() ? safeHtml : dangerExample}
      />
      <p style={{ color: "#999", "font-size": "0.85rem" }}>
        The XSS example above is intentionally blocked by the browser's own defenses
        here — the <code>onerror</code> runs but <code>alert</code> is blocked by CSP
        in most environments. In production, always sanitize before using{" "}
        <code>innerHTML</code>.
      </p>

      <h2>
        <code>textContent</code>
      </h2>
      <p>
        Sets text content directly on the DOM node — special characters are NOT
        interpreted as HTML. Slightly faster than normal text interpolation for
        large strings because it bypasses SolidJS's text-node diffing.
      </p>
      <input
        style={{ display: "block", width: "100%", padding: "0.4rem" }}
        value={text()}
        onInput={(e) => setText(e.currentTarget.value)}
      />
      <div
        style={{
          background: "#1a1a1a",
          padding: "1rem",
          "border-radius": "6px",
          "margin-top": "0.5rem",
        }}
        textContent={text()}
      />
    </>
  );
}
