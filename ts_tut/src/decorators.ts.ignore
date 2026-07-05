import assert from "node:assert";

// decorators are functions that modify the behavior of classes, methods, properties, and parameters.
// decorators are essentially functions that are applied using the `@` syntax.

// before constructor is executed, this function is called with the constructor as its argument
function Logger(target: Function) {
  // Function is the constructor of the class being decorated
  console.log("Logger decorator called..");
  console.log(target); // print the constructor function
}

// class decorator

// can not add properties to the frozen object,
// this just applies to the constructor function and its prototype
// instances of the class are not affected
function Frozen(target: Function) {
  console.log("Frozen decorator called..");
  Object.freeze(target);
  Object.freeze(target.prototype);
}

// property decorator
function Emoji() {
  return function (target: Record<string | symbol, any>, key: string | symbol) {
    console.log("Emoji decorator called..");
    console.log(key);
    console.log(target);

    // Use a per-instance Symbol so each instance has its own storage
    const storageKey = Symbol(String(key));

    console.log("define properties");

    Object.defineProperty(target, key, {
      get(this: any) {
        console.log("Emoji getter called..");
        return this[storageKey];
      },
      set(this: any, newValue: any) {
        console.log("Emoji setter called..");
        this[storageKey] = `:) ${newValue}`;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

// method decorator
function Confirm(message: string) {
  return function (
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    // Wrap the original method with the confirmation message
    descriptor.value = function (...args: any[]) {
      console.log(message);
      return originalMethod.apply(this, args);
    };
  };
}

@Logger
class User {
  name: string = "John";
  age: number = 28;

  constructor() {
    console.log("User class constructor called..");
  }
}

@Frozen
class IceCream {
  @Emoji()
  flavor: string = "vanilla";

  toppings: string[] = [];

  @Confirm("Are you sure you want to add this topping?")
  addToppings(topping = "sprinkles") {
    this.toppings.push(topping);
  }
}

export default function () {
  const us = new User();
  assert(Object.isFrozen(IceCream));
  const iceCream = new IceCream();
  console.log(iceCream.flavor);
  iceCream.flavor = "chocolate";
  console.log(iceCream.flavor);

  iceCream.addToppings("sprinkles");
  console.log(iceCream.toppings);
}
