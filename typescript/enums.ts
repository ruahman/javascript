console.log("**** enums ****");

// numerical enums
enum CardinalDirections {
  North,
  East,
  West,
  South,
}
const currentDirection = CardinalDirections.North;

// string enums
enum CardinalDirectionsStr {
  North = "north",
  East = "east",
  West = "west",
  South = "south",
}
const testCardianl = CardinalDirectionsStr.East;
