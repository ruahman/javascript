/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { Home } from "./screens/Home";
import { HelloWorld } from "./screens/HelloWorld";
import { SVG } from "./screens/Svg.tsx";
import { ShowControlFlow } from "./screens/Show.tsx";
import { ForScreen } from "./screens/For.tsx";
import { IndexScreen } from "./screens/Index.tsx";
import { SwitchScreen } from "./screens/Switch.tsx";
import { DynamicScreen } from "./screens/Dynamic.tsx";
import { PortalScreen } from "./screens/Portal.tsx";
import { ErrorBoundryScreen } from "./screens/ErrorBoundry.tsx";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/svg" component={SVG} />
      <Route path="/show" component={ShowControlFlow} />
      <Route path="/for" component={ForScreen} />
      <Route path="/index" component={IndexScreen} />
      <Route path="/switch" component={SwitchScreen} />
      <Route path="/dynamic" component={DynamicScreen} />
      <Route path="/portal" component={PortalScreen} />
      <Route path="/error" component={ErrorBoundryScreen} />
    </Router>
  ),
  root!,
);
