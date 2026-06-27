import { For } from "solid-js";
import { CartContextProvider, useCart } from "../context/cart";

function Cart() {
  //@ts-ignore
  const [items, setItems] = useCart();

  function addItem() {
    setItems([...items, { title: "bar", price: 2 }]);
  }

  return (
    <>
      <h1>show context</h1>
      <For each={items}>
        {(item) => (
          <p>
            {item.title}:{item.price}
          </p>
        )}
      </For>
      <button onClick={addItem}>add item</button>
    </>
  );
}

export function CartContext() {
  return (
    <CartContextProvider>
      <Cart />
    </CartContextProvider>
  );
}
