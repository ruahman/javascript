import variables from "./variables.ts";
import arrays from "./arrays.ts";
import tuples from "./tuples.ts";
import objects from "./objects.ts";
import enums from "./enums.ts";
import type_alias from "./type_alias.ts";
import interfaces from "./interfaces.ts";
import unions from "./unions.ts";
import functions from "./functions.ts";
import casting from "./casting.ts";
import classes from "./classes.ts";
import generics from "./generics.ts";
import intersection_types from "./intersection_types.ts";

export default () => {
  console.log("----- typescript -----");
  variables();
  arrays();
  tuples();
  objects();
  enums();
  type_alias();
  interfaces();
  unions();
  functions();
  casting();
  classes();
  generics();
  intersection_types();
};