
Js.log("Hello, ReScript/ReasonML")

let x = 5
x -> Js.log;

let y = ref(5); 
y := y.contents + 11;
Js.log(y.contents);

let c = "hello " ++ "world"
Js.log(c);

let message = "message"
let s = `hello ${message} interpolate`
Js.log(s)

type point = {x: int, mutable y : int}

let myPoint: point = { x: 11, y: 12 }
myPoint.y = 30
// this causes a problem.
// myPoint.x = 5
Js.log(myPoint);

let name = (arg) => {
  arg
}

let resName = name("Diego Vila")
Js.log(resName)


let myFun = (x, y) => {
  let doubleX = x + x
  let doubleY = y + y
  doubleX + doubleY
}

Js.log(`this returns int: ${Belt.Int.toString(myFun(2,2))}`)

let fl = 9.1 +. 5.
fl -> Js.log

let mulf = 34. *. 10.33
mulf -> Js.log

let getInt = a => a + 8;
let resGetInt = getInt(8)
Js.log(`this returns an int ${string_of_int(resGetInt)}`)


// let addInts = (a, b) => a + b;
// let curried = addInts(8)
// let cr = curried(6)

// let convertf = x => float_of_int(x);

// let rec factorial = n =>
//   if ( n <= 1) {
//     1;
//   } else {
//     n * factorial(n - 1);
//   };

// let rf = factorial(10)

// // mutual recursion
// let rec isEven = num =>
//   if( num == 0){
//     true;
//   } else {
//     isOdd(num - 1)
//   }
// and isOdd = num =>
//   if( num == 0){
//     false;
//   } else {
//     isEven(num - 1);
//   };

// type lowercased = string;

// let toLowerCase = (word: string) : lowercased => String.lowercase_ascii(word)

// type animal = string;

// let dog: animal = "beagle";
// let cat: animal = "ragdoll";

// let getTitle = (cond, exp) : string =>
//   if(cond){
//     exp;
//   } else {
//     exp ++ " workshop";
//   };

// getTitle(true, "test") -> ignore;

// // tuples
// let luke = ("Luke", "Skywalker", "Jedi")

// type person = (string, string, string);

// let han : person = ("Han", "Solo", "Pilot");

// let (tx, _) = (5, 10)

// let getFirst = ((x, _)) => x;

// let rest = getFirst((54, 2));

// // records, record must be defined first
// type parents = {
//   father: string,
//   mother: string
// }

// type personR = {
//   firstname: string,
//   lastname: string,
//   job: string,
//   parents: parents
// }

// let parents = {
//   father: "darth vader",
//   mother: "natily portman"
// }

// let lukeR = {
//   firstname: "Luke",
//   lastname: "Skywalker",
//   job: "Jedi",
//   parents
// }

// let { lastname, job } = lukeR;

// let getFirstName = person => person.firstname

// let { parents: { father }} = lukeR;

// let getFather = ({parents: {father}}) => father;

// let updateLuke = {...lukeR, job: "Farmer"}

// let hanA = ["han", "solo", "pilot"];

// type personA = array<string>;

// let hanA' = ["Han", "Solo", "Pilot"]

// let getSecond = arr => arr[1];

// // let [ firstn, l, x ] = hanA;

// // firstn -> Js.log
// // l -> Js.log
// // x -> Js.log

// // let getFullName = ([firstname, lastname, job]) => {
// //   job -> Js.log;
// //   [firstname, lastname];
// // };

// // variant Types

// type player = 
//   | Cross
//   | Circle;

// let nextTurn = Cross;

// type field = 
//   | Empty
//   | Marked(player);

// type gameState = 
//   | Playing(player)
//   | Winner(player)
//   | Draw;

// let toString = (field: field) =>
//   switch field {
//   | Marked(Cross) => "X"
//   | Marked(Circle) => "O"
//   | Empty => ""
//   };

// // this is for only single arguments
// // let toString = () =>
// //   fun 
// //   | Marked(Cross) => "X"
// //   | Marked(Circle) => "O"
// //   | Empty => ""; 

// let randomeField = Marked(Circle);

// toString(randomeField) -> Js.log;

// type animal' = 
//   | Bear
//   | Rabbit
//   | Deer;

// let isBigger = (animal1, animal2) =>
//   switch (animal1, animal2) {
//     | (Bear, Bear) => false
//     | (Rabbit, Rabbit) => false
//     | (Deer, Deer) => false
//     | (Bear, _) => true
//     | (_, Rabbit) => true 
//     | (Rabbit, Deer) => false
//     | (Deer, Bear) => false
//     | (Rabbit, Bear) => false
//   }

// // Polymorphic Variants

// let swap = (x: 'a, y: 'b): ('b, 'a) => (y, x);

// type row<'a> = ('a,'a,'a,'a,'a)

// type intRow = row<int>;

// let oddNumbers: intRow = (1,3,5,7,9)

// type stringRow = row<string>;

// let names: stringRow = ("diegok","diegok","diegok","diegok","diegok");

// type option<'a> =
//   | None
//   | Some('a);

// let isMissing = false;

// let title =
//   if (isMissing) {
//     None
//   } else {
//     Some("Reason workshop")
//   };

// let resO = switch(title){
// | Some(mainTitle) => "the name of this tutorial is: " ++ mainTitle
// | None => "Unkown"
// }


// // list

// let intList = list{1,2,3,4,5}

// let rec getLenght = randomList =>
//   switch(randomList) {
//   | list{} => 0
//   | list{_, ...tail} => 1 + getLenght(tail)
//   };

// getLenght(intList) -> Js.log
// List.length(intList) -> Js.log

// let charac = list{"Obi-wan", "Yoda"}
// let charac2 = list{"Luke", "Leia", "Han", ...charac};

// let rec append = (list1, list2) =>
//   switch(list1){
//   | list{} => list2
//   | list{head, ...tail} => list{head, ...append(tail, list2)}
//   }

// // let concat = list{"luke", "leia", "han"} and list{"obi", "yoda"};

// let resf = (language => language ++ " workshop")("reason");
// resf -> ignore

// let rec getLength' = randomList =>
//   switch randomList {
//   | list{} => 0
//   | list{_, ...tail} => 1 + getLength'(tail)
//   }

// // let rec getLengthShort =
// //   function
// //   | list{} => 0
// //   | list{_, ...tail} => 1 + getLengthShort(tail);

// type randomRecord = {
//   addInts: (int, int) => int,
//   concatStrings: (string, string) => string,
//   title: string
// }

// let withFunctions = {
//   addInts: (int1, int2) => int1 + int2,
//   concatStrings: (string1, string2) => string1 ++ " " ++ string2,
//   title: "Record of functions"
// }

// let add = a => a + 5;

// let rec computeRec = (operationFunc, x, recCount) =>
//   switch recCount {
//   | 0 => x
//   | _ => computeRec(operationFunc, operationFunc(x), recCount - 1) 
//   }

// let res2 = computeRec(add, 4, 2);

// // all function are functions with one paramitter

// let divide = (~integer1, ~integer2) => integer1 / integer2;

// let resd = divide(~integer1=0, ~integer2=10);

// let divide' = (~integer1 as a, ~integer2 as b) => a / b;

// type option2<'a> =
//   | None
//   | Some('a)

// let multiply = (~integer1, ~integer2=?, ()) =>
//   switch integer2 {
//   | None => integer1
//   | Some(integer) => integer1 * integer
//   };

// let resPartial = multiply(~integer1=5)
// let resm = multiply(~integer1=5, ());

// let rec map = (func, list) =>
//   switch list {
//   | list{} => list{}
//   | list{ head, ...tail } => list{func(head), ...map(func, tail)}
//   };

// let rec fold_right = (func, list, initialAccVal) =>
//   switch list {
//     | list{} => initialAccVal
//     | list{head, ...tail} => func(head, fold_right(func, tail, initialAccVal))
//   };

// let add = (value, acc) => value + acc;

// let resf = fold_right(add, list{1,2,3,4}, 10);
// // let resf' = fold_right((+), list{1,2,3,4,5}, 10);

// let add = a => a + 5
// let mul = m => m * 5
// let sub = s => s - 5

// let resp = 
//   6
//     -> add 
//     -> mul
//     -> sub;

// // pipe first
// let respf = List.flatten( list{ list{1,2}, list{3,4}, list{4} })
//   -> List.filter(element => element > 2, _)
//   -> List.rev

// // pipe last
// let respl = List.flatten( list{ list{1,2}, list{3,4}, list{4} })
//   |> List.filter(element => element > 2)
//   |> List.rev

// let subtract = (a, b) => a - b;
// let subtractPartial = subtract(_, 3);
// let res5 = subtractPartial(4);

// // array is unit
// let addNoArgs = () => 1 + 2;

// let resu = addNoArgs();

// // if unit is returned it is usualy a sighn that there was a mutation

// exception Finished(string);

// raise(Finished("exception"));

// let getTitle = value => {
//   let title = "Learn Reason";
//   if(title == value){
//     title;
//   } else {
//     raise(Finished("not found"))
//   }
// }

// let resEx = 
//   try {
//     getTitle("Learn haskell")
//   } catch {
//     | Finished(_) => "Dont learn reason"
//   };

// exception Done;

// let mult = list => {
//   let rec multiply = list =>
//     switch list {
//     | list{} => 1
//     | list{head, ...rest} =>
//         switch head {
//         | 0 => raise(Done)
//         | _ => head * multiply(rest)
//         }
//     };
//   try { 
//     multiply(list)
//   } catch {
//   | Done => 0
//   }
// }

// for (i in 0 to 8) {
//   print_int(i)
// }

// let i = ref(0);

// // while( i < ref(8)) {
// //   i := i + 1;
// // }

// ignore(7)

// 7 -> ignore

// type personM = {
//   firstname: string,
//   lastname: string,
//   mutable occupation: string
// }

// let x = ref(5);