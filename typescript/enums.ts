import { Expect } from "bun:test";

export default function enums(expect: Expect) {
  console.log("**** enums ****");

  // numerical enums
  enum CardinalDirections {
    North,
    East,
    West,
    South,
  }
  const currentDirection = CardinalDirections.North;

  expect(currentDirection).toBe(CardinalDirections.North);
  expect(currentDirection).toBe(0);

  // string enums
  enum CardinalDirectionsStr {
    North = "north",
    East = "east",
    West = "west",
    South = "south",
  }
  const testCardianl = CardinalDirectionsStr.East;
  expect(testCardianl).toBe(CardinalDirectionsStr.East);
  expect(testCardianl.toString()).toEqual("east");

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
  const currentMonth = Month.Jan;
  expect(currentMonth).toBe(Month.Jan);
  expect(currentMonth).toBe(0);

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
  const currentMonth2 = Month2.Jan;
  expect(currentMonth2).toBe(Month2.Jan);
  expect(currentMonth2).toBe(1);

  enum Roles {
    PILOT = "pilot",
    SECURITY = "security",
    GROUND_STAFF = "ground_staff",
    FLIGHT_ATTENDANT = "flight_attendant",
  }

  const role = Roles.PILOT;
  expect(role).toBe(Roles.PILOT);
  expect(role.toString()).toBe("pilot");
}
