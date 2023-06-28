// generic function
function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

// generic class
class NameValue<T> {
  private _value: T | undefined;

  constructor(private name: string) { }

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

function generics() {
  console.log('**** generics ****');
  console.log(createPairs('hello', 42));
  let value = new NameValue<number>('my name');
  value.setValue(10);
  console.log(value.toString());
}

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbersg = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomElement<number>(numbersg));
console.log(getRandomElement<string>(colors));

// constraintes for generics.
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let personG = merge({ name: 'Digeo' }, { age: 42 });
console.log(personG);

// generics in classes
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) { }
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop(): T | undefined {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
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
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
