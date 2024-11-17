// adfasf you can only use this for class functions.
function myDecorator(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const originalFunction = target[propertyKey];

  target[propertyKey] = function (...args: any[]) {
    console.log("Before invoking the function");
    const result = originalFunction.apply(this, args);
    console.log("After invoking the function");
    return result;
  };

  return target;
}

export default function (expect: any) {
  // for adding logic or meta data to our source code.
  // they add something to our logic.
  // Decorators are a way to add annotations and metadata to our code.
  // They are a way to add logic to our code.
  // you can only use this for class functions.
}
