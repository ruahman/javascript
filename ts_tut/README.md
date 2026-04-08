## TypeScript Tutorial
> A comprehensive guide to typed JavaScript

### 1. What is TypeScript?

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. 
It adds optional static typing, interfaces, generics, and modern tooling support.

### 2. Setup

```
npm install -g typescript
tsc --init        # creates tsconfig.json
tsc file.ts       # compile a file
tsc --watch       # watch mode
```

since typescript is suported in nodejs now you just need the flags `--no-warnings=ExperimentalWarning`, `--experimental-transform-types` 

```
node --no-warnings=ExperimentalWarning --experimental-transform-types file.ts
```

npm scripts for executing and testing a typescript file
```
npm run exec ./file.ts
npm run test ./file.test.ts
```



### 3. Basic Types

```
// Primitives
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let scores: number[] = [90, 85, 92];
let tags: Array<string> = ["ts", "js"];

// Tuple — fixed-length, typed array
let point: [number, number] = [10, 20];

// Any — opt out of type checking (avoid when possible)
let data: any = "could be anything";

// Unknown — safer alternative to any
let input: unknown = getUserInput();

// Void — function returns nothing
function log(msg: string): void {
  console.log(msg);
}

// Never — function never returns (throws or infinite loop)
function fail(msg: string): never {
  throw new Error(msg);
}

// Null & Undefined
let nothing: null = null;
let undef: undefined = undefined;

```
### 4. Type Inference
TypeScript can infer types automatically — you don't always need annotations:
```let city = "New York";   // inferred as string
let count = 42;          // inferred as number

```
### 5. Union & Intersection Types
```// Union — one of several types
let id: string | number = "abc123";
id = 42; // also valid

// Intersection — combines types
type Admin = { role: string };
type User  = { name: string };
type AdminUser = Admin & User;

const admin: AdminUser = { role: "admin", name: "Alice" };

```
### 6. Interfaces
```
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;  // optional
  readonly sku: string;  // read-only
}

const laptop: Product = {
  id: 1,
  name: "MacBook",
  price: 1999,
  sku: "MBP-001"
};

// Extending interfaces
interface DigitalProduct extends Product {
  downloadUrl: string;
}

```
### 7. Type Aliases
```type Point    = { x: number; y: number };
type ID       = string | number;
type Callback = (err: Error | null, result: string) => void;

```
> Interface vs Type: Prefer interface for object shapes (it's extendable); use type for unions, primitives, and complex compositions.

### 8. Functions

```
// Typed parameters & return type
function add(a: number, b: number): number {
  return a + b;
}

// Optional & default parameters
function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Function type
type MathOp = (a: number, b: number) => number;
const multiply: MathOp = (a, b) => a * b;

```
### 9. Generics
Generics let you write reusable, type-safe code:
```// Generic function
function identity<T>(value: T): T {
  return value;
}
identity<string>("hello");
identity<number>(42);

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
getProperty(user, "name");  // ✅ "Alice"
getProperty(user, "email"); // ❌ compile error

```
### 10. Classes
```
class Animal {
  // Access modifiers: public, private, protected
  constructor(
    public name: string,
    private age: number,
    protected species: string
  ) {}

  speak(): string {
    return `${this.name} makes a sound.`;
  }

  get info(): string {
    return `${this.name} (${this.age})`;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canis lupus");
  }

  speak(): string {
    return `${this.name} barks!`;
  }
}

const dog = new Dog("Rex", 3);
console.log(dog.speak()); // "Rex barks!"

```
### 11. Enums
```// Numeric enum
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

// String enum (preferred — more readable in logs)
enum Status {
  Pending  = "PENDING",
  Active   = "ACTIVE",
  Inactive = "INACTIVE"
}

let s: Status = Status.Active;

```
### 12. Type Narrowing
TypeScript narrows types in conditional branches:
```
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // TypeScript knows it's a string here
  }
  return value.toFixed(2);     // TypeScript knows it's a number here
}

// Narrowing with instanceof
function handle(err: Error | string) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err);
  }
}

```
### 13. Utility Types
TypeScript ships with powerful built-in utility types:
```
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialUser  = Partial<User>;            // all fields optional
type RequiredUser = Required<PartialUser>;    // all fields required
type ReadonlyUser = Readonly<User>;           // all fields read-only
type UserPreview  = Pick<User, "id"|"name">; // pick specific fields
type WithoutAge   = Omit<User, "age">;        // omit specific fields
type StringMap    = Record<string, number>;   // { [key: string]: number }
type NonNullName  = NonNullable<string | null | undefined>; // string

```
### 14. Type Assertions
```// When you know more than TypeScript
const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "Hello";

// Non-null assertion operator (!)
const el = document.querySelector(".btn")!; // you assert it's not null

```
### 15. Modules
```// math.ts — named exports
export function add(a: number, b: number) { return a + b; }
export const PI = 3.14159;

// shapes.ts — default export
export default class Circle {
  constructor(public radius: number) {}
  area() { return Math.PI * this.radius ** 2; }
}

// main.ts — importing
import Circle from "./shapes";
import { add, PI } from "./math";

```
### 16. tsconfig.json Key Options
```{
  "compilerOptions": {
    "target": "ES2020",        // JS version to compile to
    "module": "commonjs",      // module system
    "strict": true,            // enable all strict checks
    "outDir": "./dist",        // output directory
    "rootDir": "./src",        // source directory
    "esModuleInterop": true,   // better default imports
    "noImplicitAny": true,     // error on implicit any
    "strictNullChecks": true   // null/undefined must be handled
  }
}

```
### 17. Decorators
Decorators are special declarations that can be attached to classes, methods, accessors, properties, or parameters. Enable them with "experimentalDecorators": true in tsconfig.json.
```// Class decorator
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Sealed
class BankAccount {
  balance: number = 0;
}

// Method decorator — logs execution time
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    const result = original.apply(this, args);
    console.log(`${key} returned`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Property decorator
function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false });
}

class Config {
  @ReadOnly
  version = "1.0.0";
}

// Parameter decorator
function Required(target: any, key: string, index: number) {
  console.log(`Parameter at index ${index} in ${key} is required.`);
}

class UserService {
  greet(@Required name: string) {
    return `Hello, ${name}!`;
  }
}

```
### 18. Mapped Types
Mapped types transform every property in an existing type, letting you build new types programmatically.
```// Basic mapped type — make all properties optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Make all properties read-only
type Immutable<T> = {
  readonly [K in keyof T]: T[K];
};

// Practical example
interface User {
  id: number;
  name: string;
  email: string;
}

type OptionalUser  = Optional<User>;   // all props optional
type NullableUser  = Nullable<User>;   // all props can be null
type ImmutableUser = Immutable<User>;  // all props read-only

// Mapped type with remapping (via as)
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// Results in: { getId: () => number; getName: () => string; getEmail: () => string }

// Filtering keys with never
type NonNullableProps<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

```
### 19. Conditional Types
Conditional types select one of two possible types based on a condition, using the extends keyword.
```// Basic syntax: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// Built-in utility using conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Unwrap array element type
type Flatten<T> = T extends Array<infer U> ? U : T;

type StrArray = Flatten<string[]>;  // string
type Num      = Flatten<number>;    // number

// Extract return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUser(): { id: number; name: string } {
  return { id: 1, name: "Alice" };
}

type FetchResult = ReturnType<typeof fetchUser>;
// { id: number; name: string }

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>;
// string[] | number[]

// Exclude and Extract (built-in)
type OnlyStrings = Extract<string | number | boolean, string>;  // string
type NoStrings   = Exclude<string | number | boolean, string>;  // number | boolean

```
### 20. Template Literal Types
Template literal types build new string types by combining string literals, similar to JavaScript template literals.
```// Basic template literal type
type Greeting = `Hello, ${string}`;
const g: Greeting = "Hello, World";   // ✅
const b: Greeting = "Hi, World";      // ❌

// Combining union types
type Direction = "top" | "right" | "bottom" | "left";
type CSSProperty = `margin-${Direction}` | `padding-${Direction}`;

const prop: CSSProperty = "margin-top";    // ✅
const bad: CSSProperty  = "margin-center"; // ❌

// Generating event names
type EventName = "click" | "focus" | "blur";
type Handler   = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"

// Practical: type-safe CSS-in-JS helper
type HexColor    = `#${string}`;
type RgbColor    = `rgb(${number}, ${number}, ${number})`;
type Color       = HexColor | RgbColor;

const c1: Color = "#ff0000";              // ✅
const c2: Color = "rgb(255, 0, 0)";       // ✅
const c3: Color = "red";                  // ❌

// Combining with mapped types for a typed event emitter
type EventMap = {
  click: { x: number; y: number };
  keydown: { key: string };
  resize: { width: number; height: number };
};

type OnEvents = {
  [K in keyof EventMap as `on${Capitalize<string & K>}`]: (
    event: EventMap[K]
  ) => void;
};
// { onClick: (e: {x,y}) => void; onKeydown: ...; onResize: ... }

```
### 21. Symbols
Symbols are unique, immutable primitive values often used as non-colliding property keys. Enable with `"experimentalDecorators": true` is not needed — Symbols are a standard JS/TS feature.
```
// Every Symbol() call is unique
const s1 = Symbol();
const s2 = Symbol();
s1 === s2; // false

// Optional description (for debugging only)
const id = Symbol("id");
id.description; // "id"

// unique symbol type — const-only, structurally distinct type
const ID: unique symbol = Symbol("ID");
type HasID = { [ID]: number };

// Symbols as object keys — invisible to Object.keys() / for..in
const KEY = Symbol("key");
const obj: Record<string | symbol, unknown> = {};
obj[KEY] = "hidden";
Object.keys(obj); // [] — KEY is not listed

// Global registry — same key → same Symbol across modules
const g1 = Symbol.for("app.id");
const g2 = Symbol.for("app.id");
g1 === g2; // true
Symbol.keyFor(g1); // "app.id"

// Well-known symbols — hook into built-in JS behaviour
class Range {
  constructor(private start: number, private end: number) {}
  [Symbol.iterator]() {
    let n = this.start;
    const end = this.end;
    return { next: () => n <= end ? { value: n++, done: false } : { value: undefined, done: true } };
  }
}
[...new Range(1, 3)]; // [1, 2, 3]

```

### Quick Reference Cheat Sheet
			Concept
			Syntax
			Type annotation
			let x: number
			Optional prop
			name?: string
			Union
			string | number
			Intersection
			A & B
			Generic
			function f<T>(x: T): T
			Type assertion
			x as string
			Non-null assert
			x!
			keyof
			keyof User
			typeof
			typeof myVar
			Decorator
			@Sealed / @Log
			Mapped type
			[K in keyof T]: T[K]
			Conditional type
			T extends U ? X : Y
			Infer
			infer R inside extends
			Template literal type
			`on${Capitalize<K>}`
