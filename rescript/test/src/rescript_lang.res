// let binds values to names

let greeting = "hello!"
let score = 10
let newScore = 10 + score

let message = {
  let part1 = "hello"
  let part2 = "world"
  part1 ++ " " ++ part2
}

Js.log(message)

// The value of the last line of a scope is implicitly returned.

let displayGreeting = true;
if displayGreeting {
  let message = "Enjoying the docs so far?"
  Js.log(message)
}

let calculate = (x) => {
  x + 1
}

let calculateSomeMore = x => {
  x + 2
}

let result1 = 0
let result2 = calculate(result1)
let result3 = calculateSomeMore(result2)

let add = (a, b) => a + b

let score: int = 10

let add' = (x: int, y: int) : int => x + y

let drawCircle = (~radius as r: int): int => r
let resr = drawCircle(~radius=33)
Js.log(resr)

type scoreType = int
let x: scoreType = 10
Js.log(x)
type intCoordinates = (int, int, int)
type floatCoordinates = (float, float, float)

let a: intCoordinates = (10, 20, 20)
let b: floatCoordinates = (1.1, 2.2, 2.2)
Js.log(a)
Js.log(b)

type coordinates<'a> = ('a, 'a, 'a)

let a: coordinates<int> = (10, 20, 20)
let b: coordinates<float> = (1.1, 2.2, 2.2)

type result<'a, 'b> =
  | Ok('a)
  | Error('b)

type myPayload = {data: string}

type myPayloadResults<'errorType> = array<result<myPayload, 'errorType>>

let payloadResults: myPayloadResults<string> = [
  Ok({data: "hi"}),
  Ok({data: "bye"}),
  Error("Something wrong happened!")
]

type rec person = {
  name: string,
  friends: array<person>
}

type rec student = {taughtBy: teacher}
and teacher = {students: array<student>}


type coord3d = (float, float, float)

let my3dCoordinates: coord3d = (20.0, 30.5, 100.0)

let (_, y, _) = my3dCoordinates
Js.log(y)
type person' = {
  age: int,
  name: string
}

let me = {
  age: 5,
  name: "Big ReScript"
}

let name = me.name

// new records can be made from old records with the ... spread operator
let meNextYear = {...me, age: me.age + 1}

// mutable update

type person'' = {
  name: string,
  mutable age: int
}

let baby = {name: "Baby ReScript", age: 5}
baby.age = baby.age + 1

// object, no pattern matching

type person''' = {
  "age": int,
  "name": string
}

let meo = {
  "age": 5,
  "name": "Big ReScript"
}

let age = meo["age"]

// Variant

type myResponse = 
  | Yes
  | No 
  | PrettyMuch

let areYouCrushingIt = Yes


type account = 
  | None
  | Instagram(string)
  | Facebook(string, int)

let myAccount = Facebook("Josh", 26)
let friendAccount = Instagram("Jenny")

type user = 
  | Number(int)
  | Id({name: string, password: string})

let me = Id({name: "Joe", password: "123"})

type option<'a> = None | Some('a)

let x = Some(5)
let y = None

// list
let myList = list{1,2,3}

let message = 
  switch myList {
    | list{} => "foo"
    | list{a, ..._} => "test" ++ Js.Int.toString(a)
  }


let addCoordinates = (~xint as x, ~yint as y) => {
  x + y
}

let res = addCoordinates(~xint=5, ~yint=3)


let drawCircle = (~color, ~radius=?, ()) => {
  Js.Console.log(color)
  switch radius {
  | None => Js.Console.log("nono")
  | Some(r) => Js.Console.log(Js.Int.toString(r))
  }
}
