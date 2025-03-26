export default function function_overloading(expect) {
    // there is no such thing as function overloading in javascript,
    // but typescript allows us to do this
    function addo(a, b) {
        return a + b;
    }
    expect(addo(1, 2)).toBe(3);
    expect(addo("1", "2")).toBe("12");
}
//# sourceMappingURL=function-overloading.js.map