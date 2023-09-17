import styles from "./App.module.css";
import { Routes, Route, A } from "@solidjs/router";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import Product from "./screens/Product";
import Stores from "./screens/Stores";
import Effects from "./screens/Effects";
import Context from "./screens/Context";
import Components from "./screens/Components";
import DerivedValues from "./screens/DerivedValues";
import CartContextProvider from "./context/CartContextProvider.jsx";

function App() {
  return (
    <CartContextProvider>
      <div class={styles.root}>
        <h1>Vite + Solid</h1>
        <A href="/">Home</A> |<A href="/about">About</A> |
        <A href="/contact">Contact</A> |<A href="/products">Products</A> |
        <A href="/stores">Stores</A> | <A href="/effects">Effects</A> |
        <A href="/context">Context</A> | <A href="/components">Components</A> |
        <A href="/derived">Derived</A>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/stores" component={Stores} />
          <Route path="/effects" component={Effects} />
          <Route path="/context" component={Context} />
          <Route path="/components" component={Components} />
          <Route path="/derived" component={DerivedValues} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
