import styles from "./App.module.css";
import { Routes, Route, A } from "@solidjs/router";
import Products from "./screens/Products";
import Product from "./screens/Product";
import Stores from "./screens/Stores";
import Context from "./screens/Context";
import Components from "./screens/Components";
import DerivedValues from "./screens/DerivedValues";
import CartContextProvider from "./context/CartContextProvider.jsx";

function App() {
  return (
    <CartContextProvider>
      <div class={styles.root}>
        <h1>Vite + Solid</h1>
        <A href="/products">Products</A> |<A href="/stores">Stores</A> |{" "}
        <A href="/context">Context</A> | <A href="/components">Components</A> |
        <A href="/derived">Derived</A>
        <Routes>
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/stores" component={Stores} />
          <Route path="/context" component={Context} />
          <Route path="/components" component={Components} />
          <Route path="/derived" component={DerivedValues} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
