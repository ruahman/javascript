// eslint-disable-next-line
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// eslint-disable-next-line
var stringArray = ["Hello", "World", "How", "Are", "You"];
console.log(stringArray.sort());
console.log(stringArray.concat(["I", "Am", "Fine"]));
console.log(stringArray.slice(1, 3));
console.log(stringArray.join(","));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);

text = "<ul>";
fruits.forEach((item) => {
  text += item;
});
text += "</ul>";
console.log(text);
