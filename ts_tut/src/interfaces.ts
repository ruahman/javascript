import assert from "node:assert";

export default function () {
  console.log("**** interfaces ****");

  // interfaces are simular to alias except it only applies to objects
  interface Rectangle {
    height: number;
    width: number;
  }

  const rectange: Rectangle = {
    height: 23,
    width: 55,
  };

  assert.equal(rectange.height, 23);
  assert.equal(rectange.width, 55);

  // extended interfaces
  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const colorRec: ColoredRectangle = {
    height: 45,
    width: 67,
    color: "blue",
  };

  assert.equal(colorRec.color, "blue");

  // problem interfaces solve
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  function getProduct(id: number): Product {
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5,
    };
  }
  const product = getProduct(1);
  assert.equal(product.id, 1);
  assert.equal(product.name, "Awesome Gadget 1");
  assert.equal(product.price, 99.5);

  interface Person1 {
    firstName: string;
    lastName: string;
  }

  function getFullName(person: Person1) {
    return `${person.firstName} ${person.lastName}`;
  }

  const john = {
    firstName: "John",
    lastName: "Doe",
  };

  assert.equal(getFullName(john), "John Doe");

  // this also works
  const jane = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 22,
  };

  const fullName = getFullName(jane);
  assert.equal(fullName, "Jane Doe");

  // optional properties
  interface Person2 {
    firstName: string;
    middleName?: string;
    lastName: string;
  }

  function getFullName2(person: Person2) {
    if (person.middleName) {
      return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
  }

  assert.equal(
    getFullName2({ firstName: "diego", lastName: "vila" }),
    "diego vila",
  );

  assert.equal(
    getFullName2({ firstName: "diego", middleName: "ramon", lastName: "vila" }),
    "diego ramon vila",
  );

  // readonly properties
  interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;
  }

  let person2: Person;
  person2 = {
    ssn: "171-28-0926",
    firstName: "John",
    lastName: "Doe",
  };

  // function types
  type StringFormat = (str: string, isUpper: boolean) => string;

  let format: StringFormat;

  format = (str: string, isUpper: boolean) =>
    isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();

  console.log(format("hi", true));

  // class types
  interface Json {
    toJSON(): string;
  }

  class Person3 implements Json {
    constructor(
      private firstName: string,
      private lastName: string,
    ) {}
    toJSON(): string {
      return `hello world: ${this.firstName} ${this.lastName}`;
    }
  }

  const person = new Person3("diego", "vila");
  assert.equal(person.toJSON(), "hello world: diego vila");

  // extend interfaces

  interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
  }

  interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean;
  }

  class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
      console.log(`Send email to ${email} in ${after} ms.`);
      return true;
    }
    send(email: string): boolean {
      console.log(`Sent email to ${email} after ms. `);
      return true;
    }
    queue(email: string): boolean {
      console.log(`Queue an email to ${email}.`);
      return true;
    }
  }

  const mail = new Mail();
  assert.equal(mail.later("dego_vila@yahoo", 7), true);

  interface A {
    a(): void;
  }

  interface B extends A {
    b(): void;
  }

  const test: B = {
    a() {
      console.log("func a");
    },
    b() {
      console.log("func b");
    },
  };
  test.a();
  test.b();
}
