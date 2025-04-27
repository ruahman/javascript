export function tag_templates() {
  // post process the string
  function tag(strings, ...values) {
    console.log("strings.length ", strings.length);
    console.log("values.length ", values.length);
    return strings[0] + values.join("") + strings[1];
  }
  const value = "world";
  const result = tag`Hello, ${value} ${5}!`;
  console.log(result);

  function bold(strings, ...values) {
    let res = "<b>";
    for (let idx = 0; idx < strings.length; idx++) {
      res += strings[idx];
      if (idx < values.length) {
        res += values[idx];
      }
    }
    res += "</b>";

    return res;
  }

  let name = "diego";
  console.log(bold`hello world ${name}`);
}
