import van from "vanjs-core";
const { p, div, h1 } = van.tags;

const App = () => div(h1("Hello from VanJS!"), p("This is running with Vite."));

van.add(document.getElementById("app")!, App());
