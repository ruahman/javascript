// before thing is rendered
// process it with a function

export function tag_templates() {
  // post process the string,
  // you get an array of strings and values
  // you will aloway have one more i the strings array than values
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

  var name = "diego";
  console.log(bold`hello world ${name}`);
  console.log("---------------");

  function upper(strings, ...values) {
    var ret = "";
    for (let i = 0; i < strings.length; i++) {
      if (i > 0) {
        ret += String(values[i - 1]).toUpperCase();
      }
      ret += strings[i];
    }
    return ret;
  }

  var name = "diego";
  var twitter = "ruahman";
  console.log(upper`${name}:${twitter}`);
}
