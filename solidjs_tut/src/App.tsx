import "./App.css";
import { A } from "@solidjs/router";
import { JSX } from "solid-js";

const navSections = [
  {
    title: "Getting Started",
    links: [
      { href: "/", label: "Home" },
      { href: "/hello-world", label: "Hello World" },
    ],
  },
  {
    title: "Reactivity",
    links: [
      { href: "/derived", label: "Derived Signals" },
      { href: "/memo", label: "createMemo" },
      { href: "/effects", label: "createEffect" },
      { href: "/create-render-effect", label: "createRenderEffect" },
      { href: "/create-deferred", label: "createDeferred" },
      { href: "/create-selector", label: "createSelector" },
    ],
  },
  {
    title: "Stores",
    links: [
      { href: "/stores", label: "createStore" },
      { href: "/create-store", label: "Store + Todos" },
      { href: "/produce", label: "produce()" },
      { href: "/reconcile", label: "reconcile" },
      { href: "/create-mutable", label: "createMutable" },
      { href: "/unwrap", label: "unwrap" },
      { href: "/nested-reactivity", label: "Nested Reactivity" },
    ],
  },
  {
    title: "Control Flow",
    links: [
      { href: "/show", label: "Show" },
      { href: "/for", label: "For" },
      { href: "/index", label: "Index" },
      { href: "/switch", label: "Switch / Match" },
      { href: "/dynamic", label: "Dynamic" },
    ],
  },
  {
    title: "Component Patterns",
    links: [
      { href: "/components", label: "Components & Props" },
      { href: "/default-props", label: "mergeProps" },
      { href: "/split-props", label: "splitProps" },
      { href: "/spread", label: "Spread Props" },
      { href: "/children-prop", label: "children()" },
    ],
  },
  {
    title: "DOM & Events",
    links: [
      { href: "/event", label: "Events" },
      { href: "/event-namespace", label: "on: / oncapture:" },
      { href: "/style", label: "Styles" },
      { href: "/class-list", label: "classList" },
      { href: "/ref", label: "Refs (canvas)" },
      { href: "/portal", label: "Portal" },
      { href: "/svg", label: "SVG" },
      { href: "/inner-html", label: "innerHTML / textContent" },
      { href: "/prop-namespace", label: "prop: / attr:" },
      { href: "/use", label: "Custom Directives" },
    ],
  },
  {
    title: "Lifecycle",
    links: [
      { href: "/onmount", label: "onMount / onCleanup" },
      { href: "/error", label: "ErrorBoundary" },
      { href: "/on-error", label: "catchError" },
      { href: "/lazy", label: "Lazy Loading" },
      { href: "/suspence", label: "Suspense" },
      { href: "/suspense-list", label: "SuspenseList" },
      { href: "/transition", label: "useTransition" },
    ],
  },
  {
    title: "Context & Global State",
    links: [
      { href: "/counter-context", label: "createContext" },
      { href: "/cart-context", label: "Cart Context" },
      { href: "/counter-no-context", label: "createRoot Store" },
    ],
  },
  {
    title: "Advanced Reactivity",
    links: [
      { href: "/batching", label: "batch()" },
      { href: "/untrack", label: "untrack()" },
      { href: "/on", label: "on()" },
    ],
  },
  {
    title: "Async & Data",
    links: [
      { href: "/resource", label: "createResource" },
      { href: "/products", label: "Router + Data" },
    ],
  },
  {
    title: "Router",
    links: [
      { href: "/use-navigate", label: "useNavigate" },
      { href: "/use-location", label: "useLocation" },
      { href: "/use-search-params", label: "useSearchParams" },
    ],
  },
];

function App(props: { children?: JSX.Element }) {
  return (
    <div class="app-layout">
      <aside class="sidebar">
        <div class="sidebar-header">⚡ SolidJS Features</div>
        {navSections.map((section) => (
          <div class="nav-group">
            <div class="nav-group-title">{section.title}</div>
            {section.links.map((link) => (
              <A href={link.href} activeClass="active" end={link.href === "/"}>
                {link.label}
              </A>
            ))}
          </div>
        ))}
      </aside>
      <main class="content">{props.children}</main>
    </div>
  );
}

export default App;
