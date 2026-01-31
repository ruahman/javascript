import assert from "node:assert";

export default function () {
  console.log("**** enums ****");

  // numerical enums
  enum CardinalDirections {
    North = 0,
    East = 1,
    West = 2,
    South = 3,
  }

  const currentDirection = CardinalDirections.North;

  assert(currentDirection === CardinalDirections.North);
  // expect(currentDirection).toBe(CardinalDirections.North);
  assert(currentDirection === 0);
  // expect(currentDirection).toBe(0);

  // string enums
  enum CardinalDirectionsStr {
    North = "north",
    East = "east",
    West = "west",
    South = "south",
  }
  const testCardianl = CardinalDirectionsStr.East;
  assert(testCardianl === CardinalDirectionsStr.East);
  assert(testCardianl.toString() === "east");

  enum Month {
    Jan = 0,
    Feb = 1,
    Mar = 2,
    Apr = 3,
    May = 4,
    Jun = 5,
    Jul = 6,
    Aug = 7,
    Sep = 8,
    Oct = 9,
    Nov = 10,
    Dec = 11,
  }
  const currentMonth = Month.Jan;
  assert.equal(currentMonth, Month.Jan);
  assert.equal(currentMonth, 0);

  enum Month2 {
    Jan = 1,
    Feb = 2,
    Mar = 3,
    Apr = 4,
    May = 5,
    Jun = 6,
    Jul = 7,
    Aug = 8,
    Sep = 9,
    Oct = 10,
    Nov = 11,
    Dec = 12,
  }
  const currentMonth2 = Month2.Jan;
  assert.equal(currentMonth2, Month2.Jan);
  assert.equal(currentMonth2, 1);

  enum Roles {
    PILOT = "pilot",
    SECURITY = "security",
    GROUND_STAFF = "ground_staff",
    FLIGHT_ATTENDANT = "flight_attendant",
  }

  const role = Roles.PILOT;
  assert.equal(role, Roles.PILOT);
  assert.equal(role.toString(), "pilot");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test enums");
}
