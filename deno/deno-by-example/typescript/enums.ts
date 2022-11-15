export default () => {
  console.log("***** enums *****");

  // enums
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  console.log("enums: ", Direction);

  // enums initialized
  enum CardinalDirections {
    North = 1,
    East,
    South,
    West,
  }
  console.log("enums initialized: ", CardinalDirections);

  // fully initialized
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
  }
  console.log("fully initializde: ", StatusCodes);

  // string enums
  enum CardinalDirections2 {
    North = "North",
    East = "East",
    South = "South",
    West = "West",
  }
  console.log("string enums: ", CardinalDirections2);
};
