import assert from "node:assert";

// how to check for null

export default function null_check() {
  console.log("**** null check ****");

  type TecEvent = {
    name: string;
    speaker: string;
    time: number;
  };

  function printEvent(tecEvent: TecEvent | null) {
    // you have to check if null or not
    if (tecEvent === null) {
      console.log("No event");
    } else {
      console.log(tecEvent.name);
      assert.equal(tecEvent.name, "TypeScript");
    }

    // tecEvent.name; // error

    // if you dont check with if you can use optional chaining
    assert.equal(tecEvent?.name, "TypeScript");
    assert.equal(tecEvent?.speaker, "John Doe");
    assert.equal(tecEvent?.time, 10);
  }

  // printEvent(null);
  printEvent({
    name: "TypeScript",
    speaker: "John Doe",
    time: 10,
  });
}
