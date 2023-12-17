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
import { OnMount } from "./screens/OnMount.tsx";
import { Event } from "./screens/Event.tsx";
import { Style } from "./screens/Style.tsx";
import { ClassList } from "./screens/ClassList.tsx";
import { Ref } from "./screens/Ref.tsx";
import { Spread } from "./screens/Spread.tsx";
import { Use } from "./screens/Use.tsx";
import { DefaultProps } from "./screens/DefaultProps.tsx";
import { SplitProps } from "./screens/SplitProps.tsx";
import { ChildrenProp } from "./screens/ChildrenProp.tsx";
import { NestedReactivity } from "./screens/NestedReactivity.tsx";
import { CreateStore } from "./screens/CreateStore.tsx";
import { Produce } from "./screens/Produce.tsx";
import { CounterContext } from "./screens/CounterContext.tsx";
import { CounterNoContext } from "./screens/CounterNoContext.tsx";

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
      <Route path="/onmount" component={OnMount} />
      <Route path="/event" component={Event} />
      <Route path="/style" component={Style} />
      <Route path="/class-list" component={ClassList} />
      <Route path="/ref" component={Ref} />
      <Route path="/spread" component={Spread} />
      <Route path="/use" component={Use} />
      <Route path="/default-props" component={DefaultProps} />
      <Route path="/split-props" component={SplitProps} />
      <Route path="/children-prop" component={ChildrenProp} />
      <Route path="/nested-reactivity" component={NestedReactivity} />
      <Route path="/create-store" component={CreateStore} />
      <Route path="/produce" component={Produce} />
      <Route path="/counter-context" component={CounterContext} />
      <Route path="/counter-no-context" component={CounterNoContext} />
    </Router>
  ),
  root!,
);
