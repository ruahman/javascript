import { expect } from "bun:test";
export default function objects() {
    console.log("**** objects ****");
    // you can spcify the type in objec
    const car = {
        type: "Toyota",
        model: "Carolla",
        year: 2009,
    };
    expect(car.type).toBe("Toyota");
    // type inference
    const car2 = {
        type: "Ford",
    };
    car2.type = "Honda";
    expect(car2.type).toBe("Honda");
    // optional property
    const car3 = {
        type: "Hunday",
    };
    car3.milage = 70000;
    // index signatures,
    // allow any fields without specifying
    const nameAgeMap = {};
    nameAgeMap.randomName = 123;
    nameAgeMap.testName = 345;
}
//# sourceMappingURL=objects.js.map