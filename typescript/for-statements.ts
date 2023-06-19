// for (;;) {
//   console.log("infinate loop");
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}
