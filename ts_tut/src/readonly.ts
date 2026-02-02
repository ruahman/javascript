import assert from "node:assert";

export default function readonly() {
  type User = {
    readonly _id: string; // this property is readonly and never changes once set
    name: string;
    email: string;
    isActive: boolean;
  };

  const user: User = {
    _id: "123",
    name: "John",
    email: "dego@yahoo.com",
    isActive: true,
  };

  assert.equal(user._id, "123");
}
