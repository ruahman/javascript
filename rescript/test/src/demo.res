
Js.log("Hello, ReScript")

let x = 5

let y = ref(5); y := y.contents + 1

let c = "hello " ++ "world"

let message = "message"
let s = `hello ${message}`

type point = {x: int, mutable y : int}

let name = (arg) => {
  arg
}

let myFun = (x, y) => {
  let doubleX = x + x
  let doubleY = y + y
  doubleX + doubleY
}