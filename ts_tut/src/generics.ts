import assert from "node:assert";

// generics allow you to write reusable code that works with any type.

export default function generics() {
  // simple generic function that works with any type
  function identity<T>(value: T): T {
    return value;
  }

  assert.equal(identity<number>(42), 42);
  assert.equal(identity<string>("hello"), "hello");

  // generics can also be used in interfaces
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  const apiResponse: ApiResponse<number> = {
    data: 42,
    status: 200,
    message: "Success",
  };

  assert.deepEqual(apiResponse, { data: 42, status: 200, message: "Success" });

  const apiResponseString: ApiResponse<string> = {
    data: "hello",
    status: 200,
    message: "Success",
  };

  assert.deepEqual(apiResponseString, {
    data: "hello",
    status: 200,
    message: "Success",
  });

  // Generic with constraints
  // K extends keyof T means K must be a key of T
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const user = { name: "Alice", age: 30 };
  assert.equal(getProperty(user, "name"), "Alice");

  // generic function
  function createPairs<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }

  assert.deepEqual(createPairs("hello", 42), ["hello", 42]);
  assert.deepEqual(createPairs(33, "by"), [33, "by"]);

  // generic class
  class NameValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  // set number as the type parameter
  const value = new NameValue<number>("my name");
  value.setValue(10);
  assert.equal(value.toString(), "my name: 10");

  const numbersg = [1, 5, 7, 4, 2, 9];
  const colors = ["red", "green", "blue"];

  // generics are also used in arrays
  function getRandomElement<T>(items: T[]): T | undefined {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  console.log(getRandomElement<number>(numbersg));
  console.log(getRandomElement<string>(colors));

  // constraintes for generics.
  function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
      ...obj1,
      ...obj2,
    };
  }

  const personG = merge({ name: "Digeo" }, { age: 42 });
  assert.deepEqual(personG, { name: "Digeo", age: 42 });

  // type error: 300 is not an object
  // const personX = merge({ name: "Andy" }, 300);

  // generics in classes
  class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {}

    isEmpty(): boolean {
      return this.elements.length === 0;
    }

    isFull(): boolean {
      return this.elements.length === this.size;
    }

    push(element: T): void {
      if (this.elements.length === this.size) {
        throw new Error("The stack is full!");
      }
      this.elements.push(element);
    }

    pop(): T | undefined {
      if (this.elements.length == 0) {
        throw new Error("The stack is empty!");
      }
      return this.elements.pop();
    }
  }

  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  assert.equal(stack.isFull(), true);
  assert.equal(stack.isEmpty(), false);
  assert.equal(stack.pop(), 3);
  assert.equal(stack.pop(), 2);
  assert.equal(stack.pop(), 1);
  assert.equal(stack.isEmpty(), true);
  assert.throws(() => stack.pop(), { message: "The stack is empty!" });

  // generic interfaces
  interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
  }

  class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
      this.items.push(o);
    }

    remove(o: T): void {
      const index = this.items.indexOf(o);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }

    get collection(): T[] {
      return this.items;
    }

    get size(): number {
      return this.items.length;
    }
  }

  const list = new List<number>();

  for (let i = 0; i < 10; i++) {
    list.add(i);
  }

  assert.deepEqual(list.collection, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.equal(list.size, 10);

  // make sure the Formats is a valid object
  function isAvailable<Formats extends object>(
    obj: Formats,
    key: string,
  ): boolean {
    return key in obj;
  }
  const obj = { name: "Diego", age: 42 };
  assert.equal(isAvailable(obj, "name"), true);
  assert.equal(isAvailable(obj, "age"), true);
  assert.equal(isAvailable(obj, "foo"), false);

  // you can pass unions as type arguments
  const arr1: Array<number | string | boolean> = [1, 2, 3, "hello", true];
  assert.deepEqual(arr1, [1, 2, 3, "hello", true]);

  const fileFormats = {
    txt: "text/plain",
    jpg: "image/jpeg",
    png: "image/png",
  };

  // make sure file formats is of type URLList
  type URLList = {
    [key: string]: string;
  };

  function loadFile<F extends URLList>(
    fileFomate: F,
    key: string,
  ): string | undefined {
    return key in fileFomate ? fileFomate[key] : "key not found!";
  }

  assert.equal(loadFile(fileFormats, "txt"), "text/plain");
  assert.equal(loadFile(fileFormats, "jpg"), "image/jpeg");
  assert.equal(loadFile(fileFormats, "png"), "image/png");
  assert.equal(loadFile(fileFormats, "gif"), "key not found!");

  // generics in anoymous functions
  const last = <T>(arr: Array<T>): T | undefined => {
    return arr[arr.length - 1];
  };

  assert.equal(last([1, 2, 3]), 3);

  assert.equal(last<string>(["a", "b", "c"]), "c");

  // multiple generics
  const makeTupple = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
  };

  const tupple = makeTupple(5, "hello");
  assert.deepEqual(tupple, [5, "hello"]);

  const tupple2 = makeTupple<string, number>("hello", 5);
  assert.deepEqual(tupple2, ["hello", 5]);

  // you can specify what properties an object must have by extending the type
  const makePerson = <T extends { name: string; age: number }>(obj: T): T => {
    return {
      ...obj,
    };
  };

  const person = makePerson({ name: "Diego", age: 42 });
  assert.deepEqual(person, { name: "Diego", age: 42 });

  const person2 = makePerson({
    name: "Andy",
    age: 40,
  });
  assert.deepEqual(person2, { name: "Andy", age: 40 });

  // make sure that key is a legit key from object
  function getKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const res = getKey({ name: "Diego", age: 42 }, "name");
  assert.equal(res, "Diego");

  const res2 = getKey({ name: "Diego", age: 42 }, "age");
  assert.equal(res2, 42);
}
