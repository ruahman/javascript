import React, { useState, useEffect, useReducer } from "react";

const list = ["cat", "dog", "bird"];

function ListAnimals({ list }) {
  return (
    <ul>
      {list.map((item, idx) =>
        idx % 2 === 0 ? (
          <li key={idx}>{item} : even</li>
        ) : (
          <li key={idx}>{item} :odd</li>
        )
      )}
    </ul>
  );
}
export default function HelloWorld(props) {
  const [status, setStatus] = useState("Open");
  const [checked, setChecked] = useState(false);
  const [checked2, toggle] = useReducer(checked => !checked, false);

  useEffect(() => {
    alert(`checked ${checked}`);
  }, [checked]);

  return (
    <>
      <h3>{status}</h3>
      <button onClick={() => setStatus("Close")}>Closed</button>
      <button onClick={() => setStatus("Open")}>Open</button>
      <input
        type="checkbox"
        value={checked}
        onChange={e => setChecked(!checked)}
      />
      <input type="checkbox" value={checked2} onChange={toggle} />
      {checked ? "checked" : "not checked"}
      {checked2 ? "checked2" : "not checked2"}
      <h1>hello world :{props.msg}</h1>
      <ListAnimals list={list} />
    </>
  );
}
