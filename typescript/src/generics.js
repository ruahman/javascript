// generic function
function createPairs(v1, v2) {
    return [v1, v2];
}
// generic class
class NameValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
function getRandomElement(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// constraintes for generics.
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// generics in classes
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is full!");
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    }
}
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        const index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    get collection() {
        return this.items;
    }
    get size() {
        return this.items.length;
    }
}
function isAvailable(obj, key) {
    return key in obj;
}
function loadFile(fileFomate, key) {
    return key in fileFomate ? fileFomate[key] : "key not found!";
}
const last = (arr) => {
    return arr[arr.length - 1];
};
const makeTupple = (x, y) => {
    return [x, y];
};
// you can specify what properties an object must have by extending the type
const makePerson = (obj) => {
    return Object.assign({}, obj);
};
// make sure that key is a legit key from object
function getKey(obj, key) {
    return obj[key];
}
export default function generics(expect) {
    expect(createPairs("hello", 42)).toEqual(["hello", 42]);
    const value = new NameValue("my name");
    value.setValue(10);
    expect(value.toString()).toEqual("my name: 10");
    const numbersg = [1, 5, 7, 4, 2, 9];
    const colors = ["red", "green", "blue"];
    console.log(getRandomElement(numbersg));
    console.log(getRandomElement(colors));
    const personG = merge({ name: "Digeo" }, { age: 42 });
    expect(personG).toEqual({ name: "Digeo", age: 42 });
    const stack = new Stack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isFull()).toBe(true);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    expect(() => stack.pop()).toThrow("The stack is empty!");
    const list = new List();
    for (let i = 0; i < 10; i++) {
        list.add(i);
    }
    expect(list.collection).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(list.size).toBe(10);
    const obj = { name: "Diego", age: 42 };
    expect(isAvailable(obj, "name")).toBe(true);
    expect(isAvailable(obj, "age")).toBe(true);
    expect(isAvailable(obj, "foo")).toBe(false);
    // union arrays
    const arr1 = [1, 2, 3, "hello", true];
    expect(arr1).toEqual([1, 2, 3, "hello", true]);
    const fileFormats = {
        txt: "text/plain",
        jpg: "image/jpeg",
        png: "image/png",
    };
    expect(loadFile(fileFormats, "txt")).toBe("text/plain");
    expect(loadFile(fileFormats, "jpg")).toBe("image/jpeg");
    expect(loadFile(fileFormats, "png")).toBe("image/png");
    expect(loadFile(fileFormats, "gif")).toBe("key not found!");
    expect(last([1, 2, 3])).toBe(3);
    expect(last(["a", "b", "c"])).toBe("c");
    const tupple = makeTupple(5, "hello");
    expect(tupple).toEqual([5, "hello"]);
    const tupple2 = makeTupple("hello", 5);
    expect(tupple2).toEqual(["hello", 5]);
    const person = makePerson({ name: "Diego", age: 42 });
    expect(person).toEqual({ name: "Diego", age: 42 });
    const person2 = makePerson({
        name: "Andy",
        age: 40,
    });
    expect(person2).toEqual({ name: "Andy", age: 40 });
    const res = getKey({ name: "Diego", age: 42 }, "name");
    expect(res).toBe("Diego");
    const res2 = getKey({ name: "Diego", age: 42 }, "age");
    expect(res2).toBe(42);
}
//# sourceMappingURL=generics.js.map