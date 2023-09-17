import { render } from "@solidjs/testing-library";
import Card from "../Card";

describe("Card", () => {
  it("should show some text", async () => {
    console.log("test the testing frameword");

    const { findByText, getByText } = render(() => (
      <Card title="foobar">hello world</Card>
    ));

    expect(getByText("foobar")).not.toBeNull();

    expect(await findByText("hello world")).not.toBeNull();
  });
});
