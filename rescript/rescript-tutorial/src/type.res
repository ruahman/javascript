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