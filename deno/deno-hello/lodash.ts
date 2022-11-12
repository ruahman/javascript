import * as _ from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js";

export default function demo() {
  console.log("***** lodash example *****");
  const collection = [1, 2, 3, 4, 5];

  const res = _.map(collection, (item: number): boolean => {
    return item % 2 == 0;
  });

  console.log(res);
}
