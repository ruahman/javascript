import assert from "node:assert";

export async function promises() {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("I love You !!");
    }, 100);
  });

  let val = await myPromise;
  console.log(val);
  assert.equal(val, "I love You !!");

  var myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
  });

  // Create another Promise
  var myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
  });

  // run when any one of promises complete
  Promise.any([myPromise1, myPromise2]).then((x) => {
    console.log("Promise.any: ", x);
  });

  const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise OK!");
    }, 1000);
  });

  testPromise
    .then((resolveMessage) => {
      console.log(`Looks like: ${resolveMessage}`);
    })
    // incase reject is called instead
    .catch((rejectMessage) => {
      console.log(`Error: ${rejectMessage}`);
    });

  const p1 = Promise.resolve("A");
  const p2 = Promise.resolve("B");
  const p3 = Promise.resolve("C");

  Promise.all([p1, p2, p3]).then((data) => console.log("Promise.all: ", data));

  function giveMeHello(ok) {
    return new Promise((resolve, reject) => {
      if (ok) {
        resolve("Hello");
      } else {
        reject("there was a problem");
      }
    });
  }

  var promise = giveMeHello(true);
  promise
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

  var promise = giveMeHello(false);
  promise
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

  try {
    let res = await giveMeHello(true);
    console.log("await ", res);
  } catch (e) {
    console.log("try ", e);
  }

  try {
    let res = await giveMeHello(false);
    console.log("await ", res);
  } catch (e) {
    console.log("try ", e);
  }
}
