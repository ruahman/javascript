import { createSignal } from "solid-js";

export function PropNamespace() {
  const [val, setVal] = createSignal("hello");

  return (
    <>
      <h1>prop: / attr: Namespaces</h1>
      <p>
        SolidJS automatically chooses whether to set a DOM <em>property</em> or an
        HTML <em>attribute</em> for most built-in elements. Two namespace prefixes
        give you explicit control:
      </p>
      <ul>
        <li>
          <code>prop:name</code> — always sets the DOM <strong>property</strong>{" "}
          (<code>el.name = value</code>). Reactive, reflects the live value.
        </li>
        <li>
          <code>attr:name</code> — always sets the HTML <strong>attribute</strong>{" "}
          (<code>el.setAttribute("name", value)</code>). Serialized as a string.
          Mainly useful for custom elements or ARIA attributes.
        </li>
      </ul>
      <p>
        These are most important for <strong>Web Components / Custom Elements</strong>{" "}
        where the framework can't know which names are properties vs attributes.
      </p>

      <h2>Demo</h2>
      <input
        style={{ display: "block", margin: "0.5rem 0", padding: "0.4rem" }}
        onInput={(e) => setVal(e.currentTarget.value)}
        placeholder="Type here to update the boxes below"
      />

      <p>
        <code>prop:value</code> (DOM property — reactive, updates as you type):
      </p>
      {/* prop:value sets .value property reactively */}
      {/* @ts-ignore — prop: requires explicit DOM property typing */}
      <input style={{ display: "block" }} prop:value={val()} readOnly />

      <p>
        <code>attr:placeholder</code> (HTML attribute — reflects current value in
        placeholder, but won't update the input's value):
      </p>
      {/* attr:placeholder sets the attribute string */}
      {/* @ts-ignore */}
      <input style={{ display: "block" }} attr:placeholder={`current: "${val()}"`} />

      <p>Current signal value: <strong>{val()}</strong></p>
    </>
  );
}
