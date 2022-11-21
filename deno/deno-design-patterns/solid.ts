import single from "./single_responsibility.ts";

export default function demo() {
  console.log("***** solid *****");
  single();
  //---Single Responsibility
  // a class should only do one thing

  //---Open / Closed
  // open to extension but closed to modifications

  //---Lizkov subsitution
  // you should be able to replace a parent class with any of it's subclasses

  //--- Interface segregation
  // only have methods you need and are defined in a interface

  //--- Dependency Inversion
  // decouple classes and modules and should depend on abstractions instead of concrete
  // implementaions
}
