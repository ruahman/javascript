import { createSignal, createEffect } from "./reactivity.js";

const [count, setCount] = createSignal(0);

createEffect(() => {
	console.log("effect: ", count());
});

console.log(count());

setCount(5);

console.log(count());
