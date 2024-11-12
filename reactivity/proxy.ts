/// proxy for pizza
const handler = {
  // get propety of target
  get: function (target, property) {
    console.log(`Getting property ${property}`);
    return target[property];
  },

  // set property of target
  set: function (target, property, value) {
    console.log(`Setting property ${property} to ${value}`);
    target[property] = value;
    return true; // indicates that the setting has been done successfully
  },
};

const pizza = { name: "Margherita", toppings: ["tomato sauce", "mozzarella"] };

// setup a proxy to update pizza
const proxiedPizza = new Proxy(pizza, handler);

// goes through proxy when accessing property
console.log(proxiedPizza.name); // Outputs "Getting property name" and "Margherita"

// goes through proxy when setting property
proxiedPizza.name = "Pepperoni"; // Outputs "Setting property name to Pepperoni"

// When you access or modify a property on the proxiedPizza,
// it logs a message to the console.
// But you could imagine writing any functionality to property access on an object.
