import { useContext, For } from "solid-js";
import { CartContext, useCartContext } from "../context/CartContextProvider";

export default function Context() {
  //const { items, setItems } = useContext(CartContext);
  const { items, setItems } = useCartContext();

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
