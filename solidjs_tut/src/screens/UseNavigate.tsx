import { useNavigate } from "@solidjs/router";

export function UseNavigate() {
  const navigate = useNavigate();

  return (
    <>
      <h1>useNavigate</h1>
      <p>
        <code>useNavigate()</code> returns a function for <strong>programmatic navigation</strong>.
        Use it when you need to redirect after a form submission, authentication check,
        or any logic-driven navigation.
      </p>

      <h2>Forward navigation</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={() => navigate("/products")}>Go to Products</button>
      <button onClick={() => navigate("/use-search-params")}>
        Go to useSearchParams
      </button>

      <h2>History manipulation</h2>
      <button onClick={() => navigate(-1)}>Go Back (history −1)</button>
      <button onClick={() => navigate(1)}>Go Forward (history +1)</button>

      <h2>Replace vs push</h2>
      <button onClick={() => navigate("/", { replace: true })}>
        Go Home (replace — back button skips this page)
      </button>

      <p style={{ color: "#999", "font-size": "0.88rem" }}>
        <code>navigate(path)</code> pushes to history. <code>navigate(path, {"{ replace: true }"})</code>{" "}
        replaces the current entry so the back button won't return here.{" "}
        <code>navigate(-1)</code> goes back like the browser back button.
      </p>
    </>
  );
}
