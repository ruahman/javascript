type Bird = { kind: "bird"; wings: number; fly: () => void };
type Fish = { kind: "fish"; fins: number; swim: () => void };
type Dog = { kind: "dog"; tail: number; bark: () => void };
type Animal = Bird | Fish | Dog;

function whatAmI(animal: Animal): number {
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
      let thisShoulNeverHappen: never = animal;
      return thisShoulNeverHappen;
    }
  }
}

type Currency = "USD" | "EUR" | "JPY" | "GBP";

function currencyToSymbol(currency: Currency): string {
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
  let thisShoulNeverHappen: never = currency;
  return thisShoulNeverHappen;
}
