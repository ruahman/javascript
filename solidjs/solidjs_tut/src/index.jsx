/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./styles.css";
import App from "./App";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root
);
