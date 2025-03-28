// named export
export const name = "Jesse";
export const age = 40;

// all at one at the bottom
const name1 = "Jesse";
const age1 = 40;

export { name1, age1 };

// default export
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};

export default message;

// import from name exports
import { name, age } from "./person.js";

// import from default
import message from "./message.js";
