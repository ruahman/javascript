import { createResource, Show, For } from "solid-js";
import { A } from "@solidjs/router";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export function Products() {
  const [products] = createResource(fetchProducts);

  return (
    <div>
      <h1>Create Resource</h1>
      <Show when={products.loading}>Loading...</Show>
      <Show when={products.error}>Error: {products.error.message}</Show>
      <Show when={products()} fallback={<p>loading....</p>}>
        <ul>
          {products().map((product: any) => (
            <li>
              <A href={"/products/" + product.id}>{product.title}</A>
            </li>
          ))}
        </ul>
        <ul>
          <For each={products()}>{(product) => <li>{product.price}</li>}</For>
        </ul>
      </Show>
    </div>
  );
}
