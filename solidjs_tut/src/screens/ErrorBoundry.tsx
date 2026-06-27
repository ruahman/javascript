import { ErrorBoundary } from "solid-js";

const Broken = () => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};

// catches ui erros.  that way the entire screen is not ruined and we can
// find out where the problem is in the ui.
export function ErrorBoundryScreen() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}
