export default function enums() {
  console.log("**** enums ****");

  // numerical enums
  enum CardinalDirections {
    North,
    East,
    West,
    South,
  }
  let currentDirection = CardinalDirections.North;

  // string enums
  enum CardinalDirectionsStr {
    North = "north",
    East = "east",
    West = "west",
    South = "south",
  }
  let testCardianl = CardinalDirectionsStr.East;
}
