/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { Home } from "./screens/Home";
import { HelloWorld } from "./screens/HelloWorld";
import { Components } from "./screens/Components.tsx";
import { DrivedContext } from "./screens/Derived.tsx";
import { Stores } from "./screens/Stores.tsx";
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
import { CartContext } from "./screens/CartContext.tsx";
import { CounterNoContext } from "./screens/CounterNoContext.tsx";
import { Batching } from "./screens/Batching.tsx";
import { Untrack } from "./screens/Untrack.tsx";
import { On } from "./screens/On.tsx";
import { Lazy } from "./screens/Lazy.tsx";
import { Resource } from "./screens/Resource.tsx";
import { Product } from "./screens/ProductRoute.tsx";
import { Products } from "./screens/Products.tsx";
import { Suspence } from "./screens/Suspence.tsx";
import { Effects } from "./screens/Effects.tsx";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/components" component={Components} />
      <Route path="/derived" component={DrivedContext} />
      <Route path="/stores" component={Stores} />
      <Route path="/effects" component={Effects} />
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
      <Route path="/cart-context" component={CartContext} />
      <Route path="/counter-no-context" component={CounterNoContext} />
      <Route path="/batching" component={Batching} />
      <Route path="/untrack" component={Untrack} />
      <Route path="/on" component={On} />
      <Route path="/lazy" component={Lazy} />
      <Route path="/resource" component={Resource} />
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="/suspence" component={Suspence} />
    </Router>
  ),
  root!,
);
