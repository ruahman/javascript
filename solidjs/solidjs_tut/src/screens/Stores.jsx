import { For } from "solid-js";
import { createStore } from "solid-js/store";

export default function Stores() {
  const [person, setPerson] = createStore({
    name: {
      first: "Diego",
      last: "Vila",
    },
    age: 42,
  });

  const [products, setProducts] = createStore([
    { title: "foo", price: 5.33, id: 23 },
    { title: "bar", price: 7.53, id: 13 },
  ]);

  function changeFirstName(e) {
    setPerson("name", "first", e.target.value);
  }

  function changeProduct() {
    setProducts(0, "title", "cool");
    setProducts((p) => p.title === "bar", "price", 888888);
  }

  return (
    <>
      <p>{person.name.first}</p>
      <p>{person.name.last}</p>
      <p>{person.age}</p>
      <lable for="firstname">first name</lable>
      <input
        name="firstname"
        type="text"
        onInput={changeFirstName}
        value={person.name.first}
      ></input>
      <For each={products}>
        {(product) => {
          return (
            <ul>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.id}</li>
            </ul>
          );
        }}
      </For>
      <button onClick={changeProduct}>change products</button>
    </>
  );
}
