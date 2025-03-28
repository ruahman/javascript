import { expect } from "bun:test";

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
      expect(tecEvent.name).toBe("TypeScript");
    }

    // tecEvent.name; // error

    // if you dont check with if you can use optional chaining
    console.log(tecEvent?.name);
    expect(tecEvent?.name).toBe("TypeScript");
    console.log(tecEvent?.speaker);
    expect(tecEvent?.speaker).toBe("John Doe");
    console.log(tecEvent?.time);
    expect(tecEvent?.time).toBe(10);
  }

  // printEvent(null);
  printEvent({
    name: "TypeScript",
    speaker: "John Doe",
    time: 10,
  });
}
