const sum = (a : number, b : number) => {
    return a + b
}

console.log(sum(2, 2));

let isCool: boolean = true;

let age: number = 56;

let eyeColor: string = 'brown';

let favoriteQuote: string = `I'm not ole, i'm only ${age}`;

let pets: string[] = ['cat', 'dog', 'pig'];

let pets2: Array<string> = ['lion', 'tiger', 'bear'];

let wizard: object = {
    a: 'john'
}

let meh: undefined = undefined;
let noo: null = null;


// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium, Large }
let sizeName: string = Size[2];

console.log(sizeName);

let SizeNumber: number = Size.Large;
console.log(SizeNumber);

let whatever: any = 'ahhh nooo';
whatever = 5;

function sing(): void {
    console.log('laaa llaaa laa');
}

let error = (): never => {
    throw Error('oops');
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

type RobotArmy2 = {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (rebots: RobotArmy) => {
    console.log('FIGHT');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('Fight2');
}

interface CatArmy {
    type: string,
    age: number
}

let dog = {} as CatArmy;


// Function

let fightRobotArmy3 = (rebots: RobotArmy): void => {
    console.log('FIGHT');
}

// Class
class Animal {
    private sing: string;

    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello, ${this.sing}`;
    }
}

let lion = new Animal('Rarrrrr');

console.log(lion.greet());

// Union
let confused: string | number;
confused = "hello";
confused = 911;


export {sum}