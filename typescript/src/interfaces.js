export default function interfaces(expect) {
    console.log("**** interfaces ****");
    const rectange = {
        height: 23,
        width: 55,
    };
    expect(rectange.height).toBe(23);
    expect(rectange.width).toBe(55);
    const colorRec = {
        height: 45,
        width: 67,
        color: "blue",
    };
    expect(colorRec.color).toBe("blue");
    const add = (x, y) => x + y;
    expect(add(3, 4)).toBe(7);
    function getProduct(id) {
        return {
            id: id,
            name: `Awesome Gadget ${id}`,
            price: 99.5,
        };
    }
    const product = getProduct(1);
    expect(product.id).toBe(1);
    expect(product.name).toBe("Awesome Gadget 1");
    expect(product.price).toBe(99.5);
    function getFullName(person) {
        return `${person.firstName} ${person.lastName}`;
    }
    const john = {
        firstName: "John",
        lastName: "Doe",
    };
    console.log(getFullName(john));
    // this also works
    const jane = {
        firstName: "Jane",
        middleName: "K.",
        lastName: "Doe",
        age: 22,
    };
    const fullName = getFullName(jane);
    console.log(fullName); // Jane Doe
    function getFullName2(person) {
        if (person.middleName) {
            return `${person.firstName} ${person.middleName} ${person.lastName}`;
        }
        return `${person.firstName} ${person.lastName}`;
    }
    let person2;
    person2 = {
        ssn: "171-28-0926",
        firstName: "John",
        lastName: "Doe",
    };
    let format;
    format = (str, isUpper) => isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    console.log(format("hi", true));
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        toJSON() {
            return "hello world";
        }
    }
    class Mail {
        later(email, after) {
            console.log(`Send email to ${email} in ${after} ms.`);
            return true;
        }
        send(email) {
            console.log(`Sent email to ${email} after ms. `);
            return true;
        }
        queue(email) {
            console.log(`Queue an email to ${email}.`);
            return true;
        }
    }
}
//# sourceMappingURL=interfaces.js.map