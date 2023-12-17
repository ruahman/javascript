import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [items, setItems] = createStore([
    { title: "test product", quantity: 2, id: 10, price: 5.43 },
    { title: "test product #2", quantity: 7, id: 10, price: 3.24 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
