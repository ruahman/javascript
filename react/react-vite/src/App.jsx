import React, { useState } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HelloWorld msg="foobar" />
      <p>
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
