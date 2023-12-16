import "./App.css";

function App(props: any) {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/hello-world">HelloWorld</a>
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
      </nav>
      <h1>Welcome to Solidjs tuts</h1>
      {props.children}
    </>
  );
}

export default App;
