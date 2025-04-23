import assert from "node:assert";

export async function fetches() {
  console.log("*****fetch");

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
