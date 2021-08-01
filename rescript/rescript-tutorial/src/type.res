// inference
let score = 10;
let add = (a, b) => a + b;

score -> Js.log
add(3,5) -> Js.log

// type annotation
let score': int = 11;

let myInt = 5;
let myInt: int = myInt + 5;
let myInt = (5: int) + (4: int) + myInt;
let add = (x: int, y: int) : int => x + y;

add(2,2) -> Js.log

let drawCircle = (~radius as r: int): int => r + 55

drawCircle(~radius=4) -> Js.log


// type alias
type scoreType = int;
let x: scoreType = 109

Js.log(x)

// Generic
type intCoor = (int, int, int)
type floatCoor = (float, float, float)

let a: intCoor = (10, 20, 20)
let b: floatCoor = (10., 20., 30.)

Js.log(a)
Js.log(b)

type coordinates<'a> = ('a, 'a, 'a)
let a: coordinates<int> = (10, 20, 30)
let b: coordinates<float> = (10.5, 20.5, 20.5)

Js.log(a)
Js.log(b)

type result<'a, 'b> =
  | Ok('a)
  | Error('b)

type payload = {data: string}

type payLoadResults<'error> = array<result<payload, 'error>>

let myPayLoadResults: payLoadResults<string> = [
  Ok({data: "hi"}),
  Ok({data: "bye"}),
  Error("Someting wrong happened")
]

// recursive types
type rec person = {
  name: string,
  friends: array<person>
}

type rec student = {taughtBy: teacher}
and teacher = {students: array<student>}

// write your own conversion function
external convertToFloat : int => float = "%identity"
let age = 10
let gpa = 2.1 +. convertToFloat(age)

gpa -> Js.log