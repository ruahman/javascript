console.log("**** casting ****");
// there are two ways to cast

// as
const q: unknown = "hello world";
console.log((q as string).length);

// <>
const w: unknown = "hello world2";
console.log((<string>w).length);
