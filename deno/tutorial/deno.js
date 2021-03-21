const food = Deno.args[0]

if (food === 'hate') {
    console.log("deno is born")
}
else {
    console.log("deno need more love")
}

setTimeout(() => {
    console.log("check");
}, 1000);

console.table(Deno.metrics());

console.log(window)
