export default function aliases(expect) {
    // alias is a way to create new types
    // use your aliases
    const carYear = 2001;
    const carType = "Toyota";
    const carModel = "Carola";
    const car = {
        year: carYear,
        type: carType,
        model: carModel,
    };
    expect(car.year).toBe(2001);
    expect(car.type).toBe("Toyota");
    expect(car.model).toBe("Carola");
    let comb = 0;
    expect(comb).toBeTypeOf("number");
    comb = "tes";
    expect(comb).toBe("tes");
    expect(comb).toBeTypeOf("string");
    let input;
    input = 100; // valid
    expect(input).toBeTypeOf("number");
    input = "Hi"; // valid
    expect(input).toBeTypeOf("string");
    const optional = null;
    expect(optional).toBe(null);
    const optional2 = undefined;
    expect(optional2).toBe(undefined);
    const optional3 = 42;
    expect(optional3).toBe(42);
    expect(optional3).toBeTypeOf("number");
}
//# sourceMappingURL=aliases.js.map