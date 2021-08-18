let person: {
  name: string;
  age: number;
};

person = {
  name: 'Johnnnnnnnn',
  age: 25,
};

let greeting: (name: string) => string;

greeting = (name: string) => {
  return `Hi ${name}`;
};

function increment(counter: number): number {
  return counter++;
}

let items: (number | string)[] = [0, 0, 'hi', 'there'];

let employee: object;

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'Johon',
  lastName: 'Doe',
  age: 66,
  jobTitle: 'Developer',
};

let skills: string[];
skills = Array(2);
skills[0] = 'diego';
skills[1] = 'vila';

// tuple
let skill: [string, number];
skill = ['Programming', 5];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

enum Animal {
  Dog,
  Cat,
  Bird,
}

function whatAnimalIsIt(animal: Animal) {
  switch (animal) {
    case Animal.Dog:
      console.log('it is a Dog');
      break;
    case Animal.Cat:
      console.log('it is a cat');
      break;
    case Animal.Bird:
      console.log('it is a bird');
      break;
  }
}

whatAnimalIsIt(Animal.Dog);
whatAnimalIsIt(Animal.Cat);
whatAnimalIsIt(Animal.Bird);

// any
let result: any;
result = 10.123;
console.log(result.toFixed());

result = { x: 2, y: 3 };
console.log(result);

//void

function log(message): void {
  console.log(message);
}

// never
function raiseError(message: string): never {
  throw new Error(message);
}

let loop = function forever(): never {
  while (true) {
    console.log('hello');
  }
};

function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
}

console.log(fn(1));
console.log(fn('1'));

// union type
let result2: number | string;
result2 = 10;
result2 = 'Hiiiii';

// type aliases
type alphanumeric = string | number;
let input: alphanumeric = 3;
input = 'hell';

type myTuple = [number, string];
let testT: myTuple = [4, 'diego'];

// string literal
let click: 'click';
click = 'click';
// click = 'someting else';

let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';
mouseEvent = 'dbclick';
mouseEvent = 'mousedown';
// mouseEvent = 'someting else';

type MyStringLeterals = 'foo' | 'bar';
let x: MyStringLeterals = 'foo';
x = 'bar';
