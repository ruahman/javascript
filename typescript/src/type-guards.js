// you need type guards before doing an operation that is type specific
export function type_guards(x) {
    if (typeof x == "string") {
        console.log(x[0]);
    }
    if (typeof x == "number") {
        console.log(x + 3);
    }
    if (typeof x == "boolean") {
        console.log(x && true);
    }
    if (x instanceof Array) {
        console.log(x.length);
    }
}
//# sourceMappingURL=type-guards.js.map