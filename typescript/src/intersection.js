export default function intersection(expect) {
    // intersection types
    const e = {
        id: 100,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(408)-897-5684",
    };
    expect(e).toEqual({
        id: 100,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(408)-897-5684",
    });
    const c = {
        name: "ABC Inc.",
        credit: 1000000,
        email: "sales@abcinc.com",
        phone: "(408)-897-5735",
    };
    expect(c).toEqual({
        name: "ABC Inc.",
        credit: 1000000,
        email: "sales@abcinc.com",
        phone: "(408)-897-5735",
    });
}
//# sourceMappingURL=intersection.js.map