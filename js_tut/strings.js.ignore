import assert from "node:assert";

export function strings() {
  console.log("hello");
  console.log("diego".length);
  console.log("diego".toUpperCase());

  // template stirngs, template literals

  let firstName = "John";
  let lastName = "Doe";

  var text = `Welcome ${firstName}, ${lastName}!`;

  console.log(text);

  // template strings allow single and double quote
  var text = `He's often called "Johnny"`;

  let length = text.length;

  // can also do multiline
  var text = `The quick
brown fox
jumps over
the lazy dog`;

  var myNewList = `<ul>
      <li>foo</li>
      <li>bar</li>
    </ul>`;

  // slice
  var text = "Apple, Banana, Kiwi";
  var part = text.slice(7, 13);
  console.log(part);
  assert.equal(part, "Banana");

  var part = text.slice(7);
  console.log(part);
  assert.equal(part, "Banana, Kiwi");

  var part = text.substr(7, 6);
  console.log(part);
  assert.equal(part, "Banana");

  // toUpperCase
  var text = "Hello World!";
  var textCap = text.toUpperCase();
  console.log(textCap);
  assert.equal(textCap, "HELLO WORLD!");

  // trim
  var text1 = "      Hello World!      ";
  var text2 = text1.trim();
  assert.equal(text2, "Hello World!");

  // split
  var text = "a,b,c,d,e,f";
  var myArray = text.split(",");
  console.log(myArray);
  assert.deepStrictEqual(myArray, ["a", "b", "c", "d", "e", "f"]);

  // indexOf
  var text = "Please locate where 'locate' occurs!";
  var index = text.indexOf("locate");
  console.log(index);
  assert.equal(index, 7);

  // search
  var text = "Please locate where 'locate' occurs!";
  var res = text.search(/locate/); // search allow RegEx
  console.log(res);
  assert.equal(res, 7);

  // includes
  var text = "Hello world, welcome to the universe.";
  assert.ok(text.includes("world"));
  assert.ok(!text.includes("foo"));

  // parseInt
  assert.equal(parseInt("-10"), -10);
  assert.equal(parseInt("-10.33"), -10);
  assert.equal(parseInt("10"), 10);
  assert.equal(parseInt("ten"), NaN);
  assert.ok(isNaN("ten"));
  assert.ok(!isNaN(10));

  // parseFloat
  assert.equal(parseFloat("-10.33"), -10.33);
  assert.equal(parseFloat("-10"), -10.0);
  assert.equal(parseFloat("negative ten"), NaN);
  assert.ok(isNaN("negative ten"));
}
