import Counter from "../Counter";
import { render, fireEvent } from "@solidjs/testing-library";

test("counter incrementing", async () => {
  const { getByText, queryByText } = render(() => <Counter />);
  expect(getByText("counter: 0")).toBeTruthy();
  let button = getByText("increment");
  fireEvent.click(button);
  expect(getByText("counter: 1")).toBeTruthy();
  expect(queryByText("counter: 0")).not.toBeTruthy();
});
