import variables from "./variables.ts";
import arrays from "./arrays.ts";
import tuples from "./tuples.ts";
import objects from "./objects.ts";
import enums from "./enums.ts";
import type_alias from "./type_alias.ts";
import interfaces from "./interfaces.ts";
// import functionDemo from "./functions.ts";
// import classesDemo from "./classes.ts";
// import genericsDemo from "./generics.ts";
// import typeAliasesDemo from "./type_aliases.ts";
// import castingDemo from "./casting.ts";

// variableDemo();
// functionDemo();
// interfaceDemo();
// classesDemo();
// genericsDemo();
// typeAliasesDemo();
// castingDemo();

export default () => {
  console.log("----- typescript -----");
  variables();
  arrays();
  tuples();
  objects();
  enums();
  type_alias();
  interfaces();
};
