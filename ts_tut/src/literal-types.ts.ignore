import assert from "node:assert";

export default function () {
  console.log("**** literal types ****");

  // literal types,
  // can only have a specific value

  type Direction = "north" | "south" | "east" | "west";
  function move(direction: Direction) {
    return `You moved ${direction}`;
  }

  assert.equal(move("north"), "You moved north");

  // string literal types
  type Color = "red" | "blue" | "green";
  function paint(color: Color) {
    return `You painted it ${color}`;
  }

  assert.equal(paint("red"), "You painted it red");

  // numeric literal types
  type Speed = 1 | 2 | 3 | 4;
  function drive(speed: Speed) {
    return `You drove at speed ${speed}`;
  }

  assert.equal(drive(1), "You drove at speed 1");

  // boolean literal types
  type YesNo = true | false;
  function answer(answer: YesNo) {
    return `You answered ${answer}`;
  }

  assert.equal(answer(true), "You answered true");
  assert.equal(answer(false), "You answered false");
}
