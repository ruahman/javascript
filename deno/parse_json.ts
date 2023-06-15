if (import.meta.main) {
  const obj = {
    hello: "world",
    numbers: [1, 2, 3],
  };
  const json = JSON.stringify(obj);
  console.log(json);

  const data = JSON.parse(json);
  console.log(data.hello);
  console.log(data.numbers.length);
}
