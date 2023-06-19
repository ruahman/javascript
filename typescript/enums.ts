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

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

enum Month2 {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
