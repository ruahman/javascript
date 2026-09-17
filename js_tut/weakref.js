export function weakref() {
  let obj = { message: "Hello, world!" };
  // weak referce will not keep obj is it get set to null
  const weakRef = new WeakRef(obj);
  console.log(weakRef);
  console.log(weakRef.deref().message);
  // if obj is set to null then object is clear
}
