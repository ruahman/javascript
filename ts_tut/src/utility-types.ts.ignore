import assert from "node:assert";

export default function () {
  console.log("**** utility-types *****");

  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }

  type PartialUser = Partial<User>; // all fields optional
  let partialUser: PartialUser = { id: 1, name: "John" };
  assert.equal(partialUser.id, 1);
  assert.equal(partialUser.name, "John");
  assert.equal(partialUser.email, undefined);
  assert.equal(partialUser.age, undefined);

  type RequiredUser = Required<PartialUser>; // all fields required
  let requiredUser: RequiredUser = { id: 1, name: "John", email: "", age: 0 };
  assert.equal(requiredUser.id, 1);
  assert.equal(requiredUser.name, "John");
  assert.equal(requiredUser.email, "");
  assert.equal(requiredUser.age, 0);

  type ReadonlyUser = Readonly<User>; // all fields read-only
  let readonlyUser: ReadonlyUser = { id: 1, name: "John", email: "", age: 0 };
  assert.equal(readonlyUser.id, 1);
  assert.equal(readonlyUser.name, "John");
  assert.equal(readonlyUser.email, "");
  assert.equal(readonlyUser.age, 0);

  type UserPreview = Pick<User, "id" | "name">; // pick specific fields
  let userPreview: UserPreview = { id: 1, name: "John" };
  assert.equal(userPreview.id, 1);
  assert.equal(userPreview.name, "John");
  // assert.equal(userPreview.email, undefined);
  // assert.equal(userPreview.age, undefined);

  type WithoutAge = Omit<User, "age">; // omit specific fields
  let withoutAge: WithoutAge = { id: 1, name: "John", email: "" };
  assert.equal(withoutAge.id, 1);
  assert.equal(withoutAge.name, "John");
  assert.equal(withoutAge.email, "");
  // assert.equal(withoutAge.age, undefined);

  type StringMap = Record<string, number>; // { [key: string]: number }
  let stringMap: StringMap = { one: 1, two: 2 };
  assert.equal(stringMap["one"], 1);
  assert.equal(stringMap["two"], 2);
}
