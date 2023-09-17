import { createSignal } from "solid-js";
import { useCartContext } from "../context/CartContextProvider";

export default function DerivedValues() {
  const [counter, setCounter] = createSignal(0);

  const { items, setItems } = useCartContext();

  const double = () => {
    return counter() * 2;
  };

  const sum = () => {
    return items.reduce((acc, item) => {
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
      <p>counter: {counter}</p>
      <p>double: {double}</p>
      <p>sum of items: {sum}</p>
      <button onClick={increment}>increment</button>
      <button onClick={addItem}>add item</button>
    </>
  );
}
