import assert from "node:assert";

export function classes() {
  class Car {
    // private property
    #counter = 0;
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    // private method
    #foo() {
      console.log("private counter: ", this.#counter);
    }
    age() {
      this.#foo();
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  const myCar = new Car("Ford", 2014);

  console.log("My car is " + myCar.age() + " years old.");

  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);

  console.log(myCar1, myCar2);

  class Model extends Car {
    // the name of the getters and setters can not be the same as the property
    #model;
    constructor(name, year, model) {
      super(name, year);
      this.#model = model;
    }
    static hello() {
      return "Hello";
    }
    show() {
      return `${this.name} ${this.year} ${this.model}`;
    }
    get model() {
      return this.#model;
    }
    set model(x) {
      this.#model = x;
    }
  }

  let myCar3 = new Model("toyota", "2014", "yaris");
  assert.equal(myCar3.show(), "toyota 2014 yaris");
  myCar3.model = "foobar";
  assert.equal(myCar3.model, "foobar");
  assert.equal(myCar3.show(), "toyota 2014 foobar");
  assert.equal(Model.hello(), "Hello");

  class WorkShop {
    constructor(teacher) {
      this.teacher = teacher;
    }
    ask(question) {
      console.log(this.teacher, question);
    }
  }
  var deepJS = new WorkShop("Kyle");
  var reactJS = new WorkShop("Suzy");

  deepJS.ask("howdy");
  reactJS.ask("whatsup");
}
