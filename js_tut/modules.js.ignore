// modules all variables are hidden in module
// if you want to expose them then you need to export them.
// to run this script as a module you need to specify the javascript engine if
// you are going to import it as a module.
// otherwise all the varailbe that you define here will be in global scope

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
// you need to specify .js because technically you are specifying a URL
import { age, name } from "./person.js";

// import from default
import message from "./message.js";
