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

export default function generics() {
  console.log("**** generics ****");
  console.log(createPairs("hello", 42));
  let value = new NameValue<number>("my name");
  value.setValue(10);
  console.log(value.toString());
}
