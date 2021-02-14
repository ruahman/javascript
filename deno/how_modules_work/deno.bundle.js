// $ deno bundle deno2.js deno.bundle.js
console.log("Welcome to Deno!");
function denode(input) {
    if (input.toLowerCase() === 'node') {
        return input.split("").sort().join("");
    }
    return input;
}
console.log(denode("NODE"));
