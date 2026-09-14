import assert from "node:assert";

// decomposing an object into it's parts

function getSomeRecords() {
  return [
    {
      name: "diego",
      email: "ruahman@gmail",
    },
    {
      name: "andy",
    },
  ];
}

export function destructuring() {
  var [
    { name: firstName, email: firstEmail = "nobody@none.tld" },
    { name: secondName, email: secondEmail = "nobody@none.tld" },
  ] = getSomeRecords();
  console.log(firstName, secondName);
  console.log(firstEmail, secondEmail);
}
