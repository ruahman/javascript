export default function enums(expect: any) {
  console.log("**** enums ****");

  // numerical enums
  enum CardinalDirections {
    North = 0,
    East = 1,
    West = 2,
    South = 3,
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
  expect(currentMonth).toBe(Month.Jan);
  expect(currentMonth).toBe(0);

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
