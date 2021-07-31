let greeting = "hello!";
let score = 10;
let newScore = 10 + score;

let message = {
  let part1 = "hello";
  let part2 = "world";
  part1 ++ " " ++ part2;
};

let displayGreeting = true;
if(displayGreeting){
  let message = "Enjoying the docs so far?";
  Js.log(message);
}

let calculate = (x) => {
  x + 1
}

let result = 0;
let result = calculate(result);
let result = calculate(result);

Js.log(result)