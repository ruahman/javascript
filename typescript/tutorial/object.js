var person;
person = {
    name: 'Johnnnnnnnn',
    age: 25,
};
var greeting;
greeting = function (name) {
    return "Hi " + name;
};
function increment(counter) {
    return counter++;
}
var items = [0, 0, 'hi', 'there'];
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer',
};
var employee2 = {
    firstName: 'Johon',
    lastName: 'Doe',
    age: 66,
    jobTitle: 'Developer',
};
var skills;
skills = Array(2);
skills[0] = 'diego';
skills[1] = 'vila';
// tuple
var skill;
skill = ['Programming', 5];
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
    Animal[Animal["Bird"] = 2] = "Bird";
})(Animal || (Animal = {}));
function whatAnimalIsIt(animal) {
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
var result;
result = 10.123;
console.log(result.toFixed());
result = { x: 2, y: 3 };
console.log(result);
//void
function log(message) {
    console.log(message);
}
// never
function raiseError(message) {
    throw new Error(message);
}
var loop = function forever() {
    while (true) {
        console.log('hello');
    }
};
function fn(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
}
console.log(fn(1));
console.log(fn('1'));
// union type
var result2;
result2 = 10;
result2 = 'Hiiiii';
var input = 3;
input = 'hell';
var testT = [4, 'diego'];
// string literal
var click;
click = 'click';
// click = 'someting else';
var mouseEvent;
mouseEvent = 'dbclick';
mouseEvent = 'mousedown';
var x = 'foo';
x = 'bar';
