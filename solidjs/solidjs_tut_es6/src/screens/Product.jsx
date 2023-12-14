import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";

async function fetchProduct(id) {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
}

export default function Product() {
  const params = useParams();

  // pass in a signal that will signal when to fetch again
  // if params.id changes, it will signal to fetch again
  const [product] = createResource(params.id, fetchProduct);

  return (
    <div>
      <h1>Product</h1>
      <Show when={product.loading}>Loading...</Show>
      <Show when={product.error}>Error: {product.error.message}</Show>
      <Show when={product()} fallback={<p>loading....</p>}>
        <h2>{product().title}</h2>
        <p>{product().description}</p>
        <img src={product().image} alt={product().title} />
      </Show>
    </div>
  );
}
