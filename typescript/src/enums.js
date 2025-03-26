export default function enums(expect) {
    console.log("**** enums ****");
    // numerical enums
    let CardinalDirections;
    (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 0] = "North";
        CardinalDirections[CardinalDirections["East"] = 1] = "East";
        CardinalDirections[CardinalDirections["West"] = 2] = "West";
        CardinalDirections[CardinalDirections["South"] = 3] = "South";
    })(CardinalDirections || (CardinalDirections = {}));
    const currentDirection = CardinalDirections.North;
    expect(currentDirection).toBe(CardinalDirections.North);
    expect(currentDirection).toBe(0);
    // string enums
    let CardinalDirectionsStr;
    (function (CardinalDirectionsStr) {
        CardinalDirectionsStr["North"] = "north";
        CardinalDirectionsStr["East"] = "east";
        CardinalDirectionsStr["West"] = "west";
        CardinalDirectionsStr["South"] = "south";
    })(CardinalDirectionsStr || (CardinalDirectionsStr = {}));
    const testCardianl = CardinalDirectionsStr.East;
    expect(testCardianl).toBe(CardinalDirectionsStr.East);
    expect(testCardianl.toString()).toEqual("east");
    let Month;
    (function (Month) {
        Month[Month["Jan"] = 0] = "Jan";
        Month[Month["Feb"] = 1] = "Feb";
        Month[Month["Mar"] = 2] = "Mar";
        Month[Month["Apr"] = 3] = "Apr";
        Month[Month["May"] = 4] = "May";
        Month[Month["Jun"] = 5] = "Jun";
        Month[Month["Jul"] = 6] = "Jul";
        Month[Month["Aug"] = 7] = "Aug";
        Month[Month["Sep"] = 8] = "Sep";
        Month[Month["Oct"] = 9] = "Oct";
        Month[Month["Nov"] = 10] = "Nov";
        Month[Month["Dec"] = 11] = "Dec";
    })(Month || (Month = {}));
    const currentMonth = Month.Jan;
    expect(currentMonth).toBe(Month.Jan);
    expect(currentMonth).toBe(0);
    let Month2;
    (function (Month2) {
        Month2[Month2["Jan"] = 1] = "Jan";
        Month2[Month2["Feb"] = 2] = "Feb";
        Month2[Month2["Mar"] = 3] = "Mar";
        Month2[Month2["Apr"] = 4] = "Apr";
        Month2[Month2["May"] = 5] = "May";
        Month2[Month2["Jun"] = 6] = "Jun";
        Month2[Month2["Jul"] = 7] = "Jul";
        Month2[Month2["Aug"] = 8] = "Aug";
        Month2[Month2["Sep"] = 9] = "Sep";
        Month2[Month2["Oct"] = 10] = "Oct";
        Month2[Month2["Nov"] = 11] = "Nov";
        Month2[Month2["Dec"] = 12] = "Dec";
    })(Month2 || (Month2 = {}));
    const currentMonth2 = Month2.Jan;
    expect(currentMonth2).toBe(Month2.Jan);
    expect(currentMonth2).toBe(1);
    let Roles;
    (function (Roles) {
        Roles["PILOT"] = "pilot";
        Roles["SECURITY"] = "security";
        Roles["GROUND_STAFF"] = "ground_staff";
        Roles["FLIGHT_ATTENDANT"] = "flight_attendant";
    })(Roles || (Roles = {}));
    const role = Roles.PILOT;
    expect(role).toBe(Roles.PILOT);
    expect(role.toString()).toBe("pilot");
}
//# sourceMappingURL=enums.js.map