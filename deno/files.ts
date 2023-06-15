const decoder = new TextDecoder("utf-8");

// read file
let data = await Deno.readFile("readme.txt");
console.log(decoder.decode(data));

// write file
const encoder = new TextEncoder();
const text = "\nhello again";

await Deno.writeFile("readme.txt", encoder.encode(text));

// read it again
data = await Deno.readFile("readme.txt");
console.log(decoder.decode(data));

// read text file, easier
const textResult = await Deno.readTextFile("readme.txt");
console.log(textResult);
