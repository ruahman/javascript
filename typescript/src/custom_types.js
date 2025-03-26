export default function custom_types(expect) {
    // same as aliase
    const ship = {
        max: 10,
        items: [{ weight: 1 }, { weight: 2 }],
    };
    expect(ship).toEqual({
        max: 10,
        items: [{ weight: 1 }, { weight: 2 }],
    });
    const movie = {
        title: "Die Hard",
        price: 10,
        var: 1,
        stock: 10,
        description: "Action movie",
    };
    expect(movie).toEqual({
        title: "Die Hard",
        price: 10,
        var: 1,
        stock: 10,
        description: "Action movie",
    });
    console.log(movie);
}
//# sourceMappingURL=custom_types.js.map