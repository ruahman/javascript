import "./App.css";

function App(props: any) {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/hello-world">HelloWorld</a>
        <a href="/components">Components</a>
        <a href="/derived">Derived</a>
        <a href="/stores">Stores</a>
        <a href="/effects">Effects</a>
        <a href="/svg">SVG</a>
        <a href="/show">Show</a>
        <a href="/for">For</a>
        <a href="/index">Index</a>
        <a href="/switch">Switch</a>
        <a href="/dynamic">Dynamic</a>
        <a href="/portal">Portal</a>
        <a href="/error">Error</a>
        <a href="/onmount">OnMount</a>
        <a href="/event">Event</a>
        <a href="/style">Style</a>
        <a href="/class-list">ClassList</a>
        <a href="/ref">Ref</a>
        <a href="/spread">Spread</a>
        <a href="/use">Use</a>
        <a href="/default-props">DefaultProps</a>
        <a href="/split-props">SplitProps</a>
        <a href="/children-prop">ChildrenProp</a>
        <a href="/nested-reactivity">NestedReactivity</a>
        <a href="/create-store">CreateStore</a>
        <a href="/produce">Produce</a>
        <a href="/counter-context">CounterContext</a>
        <a href="/cart-context">CartContext</a>
        <a href="/counter-no-context">CounterNoContext</a>
        <a href="/batching">Batching</a>
        <a href="/untrack">Untrack</a>
        <a href="/lazy">Lazy</a>
        <a href="/on">On</a>
        <a href="/resource">Resource</a>
        <a href="/products">Products</a>
        <a href="/suspence">Suspence</a>
      </nav>
      <h1>Welcome to Solidjs tuts</h1>
      {props.children}
    </>
  );
}

export default App;
