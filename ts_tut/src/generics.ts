import type { Expect } from "bun:test";

// generic function
function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

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

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// constraintes for generics.
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

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

function isAvailable<Formats extends object>(
  obj: Formats,
  key: string,
): boolean {
  return key in obj;
}

type URLList = {
  [key: string]: string;
};

function loadFile<F extends URLList>(fileFomate: F, key: string): string {
  return key in fileFomate ? fileFomate[key] : "key not found!";
}

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const makeTupple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

// you can specify what properties an object must have by extending the type
const makePerson = <T extends { name: string; age: number }>(obj: T): T => {
  return {
    ...obj,
  };
};

// make sure that key is a legit key from object
function getKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export default function generics(expect: Expect) {
  expect(createPairs("hello", 42)).toEqual(["hello", 42]);

  const value = new NameValue<number>("my name");
  value.setValue(10);
  expect(value.toString()).toEqual("my name: 10");

  const numbersg = [1, 5, 7, 4, 2, 9];
  const colors = ["red", "green", "blue"];

  console.log(getRandomElement<number>(numbersg));
  console.log(getRandomElement<string>(colors));

  const personG = merge({ name: "Digeo" }, { age: 42 });
  expect(personG).toEqual({ name: "Digeo", age: 42 });

  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.isFull()).toBe(true);
  expect(stack.isEmpty()).toBe(false);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.isEmpty()).toBe(true);
  expect(() => stack.pop()).toThrow("The stack is empty!");

  const list = new List<number>();

  for (let i = 0; i < 10; i++) {
    list.add(i);
  }

  expect(list.collection).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(list.size).toBe(10);

  const obj = { name: "Diego", age: 42 };
  expect(isAvailable(obj, "name")).toBe(true);
  expect(isAvailable(obj, "age")).toBe(true);
  expect(isAvailable(obj, "foo")).toBe(false);

  // union arrays
  const arr1: Array<number | string | boolean> = [1, 2, 3, "hello", true];
  expect(arr1).toEqual([1, 2, 3, "hello", true]);

  const fileFormats = {
    txt: "text/plain",
    jpg: "image/jpeg",
    png: "image/png",
  };

  expect(loadFile(fileFormats, "txt")).toBe("text/plain");
  expect(loadFile(fileFormats, "jpg")).toBe("image/jpeg");
  expect(loadFile(fileFormats, "png")).toBe("image/png");
  expect(loadFile(fileFormats, "gif")).toBe("key not found!");

  expect(last([1, 2, 3])).toBe(3);

  expect(last<string>(["a", "b", "c"])).toBe("c");

  const tupple = makeTupple(5, "hello");
  expect(tupple).toEqual([5, "hello"]);

  const tupple2 = makeTupple<string, number>("hello", 5);
  expect(tupple2).toEqual(["hello", 5]);

  const person = makePerson({ name: "Diego", age: 42 });
  expect(person).toEqual({ name: "Diego", age: 42 });

  const person2 = makePerson({
    name: "Andy",
    age: 40,
  });
  expect(person2).toEqual({ name: "Andy", age: 40 });

  const res = getKey({ name: "Diego", age: 42 }, "name");
  expect(res).toBe("Diego");

  const res2 = getKey({ name: "Diego", age: 42 }, "age");
  expect(res2).toBe(42);
}
