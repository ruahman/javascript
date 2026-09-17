import assert from "node:assert";

export function switches() {
  console.log("***** switches *****");

  var day;
  switch (new Date("4/19/2025").getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  assert.equal(day, "Saturday");
  switch (new Date("4/19/2025").getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "good day";
  }
  assert.equal(day, "good day");
}



import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  switches();
}
