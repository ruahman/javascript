function myAwesomeFunction() {
  console.log("myAwesomeFunction");
}

// arrow functions
let myFunction = (a, b) => a * b;

// With a regular function this represents the object that calls the function:
// Regular Function:
hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

// With an arrow function this represents the owner of the function
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
