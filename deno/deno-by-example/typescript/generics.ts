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

function getPromise<T extends Map<string, number>>(value: T): Promise<T> {
  return new Promise((res, _rej) => {
    setTimeout(() => {
      res(value);
    }, 1000);
  });
}

export default async function demo() {
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

  // const resNum = await getPromise(123);
  // const resStr = await getPromise("123");
  // const resBool = await getPromise(true);
  const mapping = new Map<string, number>();

  //1. Add entries
  mapping.set("Lokesh", 37);
  mapping.set("Raj", 35);
  mapping.set("John", 40);

  const resMap = await getPromise(mapping);
  // console.log(resNum, resStr, resBool);
  console.log(resMap);
}
