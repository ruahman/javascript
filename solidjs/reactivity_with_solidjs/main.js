import { createSignal, createEffect, createMemo, untrack } from "./reactive.js";

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);

const sum = createMemo(() => count() + count2());

createEffect(() => {
	if (show()) console.log("effect count: ", count());
	else console.log(count2());
	console.log("effect sum: ", sum());
	console.log(
		"effect untrack: ",
		untrack(() => count()),
	);
});

console.log("count: ", count()); // 0

setCount(5);

console.log("count: ", count()); // 5

setShow(false);
setCount(10);
