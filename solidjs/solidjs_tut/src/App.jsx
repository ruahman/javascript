import styles from "./App.module.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import { Routes, Route, A } from "@solidjs/router";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import Product from "./screens/Product";

function App() {
  return (
    <div class={styles.root}>
      <h1>Vite + Solid</h1>
      <Card title="hello prop one">
        <p>mesage asldfjl</p>
      </Card>
      <Card title="bla bla bla">hello there</Card>
      <Card title="foobar">last message</Card>
      <Counter />
      <A href="/">Home</A> |<A href="/about">About</A> |
      <A href="/contact">Contact</A> |<A href="/products">Products</A> |
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  );
}

export default App;
