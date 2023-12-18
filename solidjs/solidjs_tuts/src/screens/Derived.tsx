import { createSignal } from "solid-js";
import { CartContextProvider, useCart } from "../context/cart";

function Derived() {
  const [counter, setCounter] = createSignal(0);

  //@ts-ignore
  const [items, setItems] = useCart();

  // derived value from counter
  const double = () => {
    return counter() * 2;
  };

  // derived value from cart
  const sum = () => {
    return items.reduce((acc: number, item: any) => {
      return acc + item.price;
    }, 0);
  };

  function addItem() {
    setItems([...items, { title: "bar", price: 5 }]);
  }

  function increment() {
    setCounter(counter() + 1);
  }

  return (
    <>
      <h1>Derived values</h1>
      <p>counter: {counter()}</p>
      <p>double: {double()}</p>
      <p>sum of items: {sum()}</p>
      <button onClick={increment}>increment</button>
      <button onClick={addItem}>add item</button>
    </>
  );
}

export function DrivedContext() {
  return (
    <CartContextProvider>
      <Derived />
    </CartContextProvider>
  );
}
