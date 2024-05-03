import { Expect } from "bun:test";

export default function never(expect: Expect) {
  type Bird = { kind: "bird"; wings: number; fly: () => void };
  type Fish = { kind: "fish"; fins: number; swim: () => void };
  type Dog = { kind: "dog"; tail: number; bark: () => void };
  type Animal = Bird | Fish | Dog;

  function whatAmI(animal: Animal): number | never {
    switch (animal.kind) {
      case "bird": {
        return animal.wings;
      }
      case "fish": {
        return animal.fins;
      }
      case "dog": {
        return animal.tail;
      }
      default: {
        // this will tells the compiler that this will never happen,
        // this is only true if you have covered all the possible cases
        // animal should never be assigned to a never type
        const thisShoulNeverHappen: never = animal;
        return thisShoulNeverHappen;
      }
    }
  }

  const res = whatAmI({
    kind: "bird",
    wings: 2,
    fly: () => {
      console.log("I am flying");
    },
  });

  expect(res).toBe(2);

  type Currency = "USD" | "EUR" | "JPY" | "GBP";

  function currencyToSymbol(currency: Currency): string | never {
    if (currency === "USD") {
      return "$";
    } else if (currency === "EUR") {
      return "€";
    } else if (currency === "JPY") {
      return "¥";
    } else if (currency === "GBP") {
      return "£";
    }

    // you have exauhsted all the possible cases, if this does not reach this point
    const thisShoulNeverHappen: never = currency;
    return thisShoulNeverHappen;
  }

  const symbol = currencyToSymbol("USD");
  expect(symbol).toBe("$");
}
