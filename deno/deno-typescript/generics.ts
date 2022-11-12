function getArray<T>(items: T[]): T[] {
  return new Array(0).concat(items);
}

class NamedValue<T> {
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

export default function demo() {
  console.log("***** generics *****");
  const numArray = getArray<number>([1, 2, 3, 4, 5]);
  console.log(numArray);
  const strArray = getArray<string>(["bird", "cat", "dog"]);
  console.log(strArray);

  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

  const value = new NamedValue<number>("myNumber");
  value.setValue(10);
  console.log(value.toString());
}
