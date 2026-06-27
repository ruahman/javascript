import { For, createSignal } from "solid-js";
import { createStore, reconcile } from "solid-js/store";

type User = { id: number; name: string; score: number };

const datasets: User[][] = [
  [
    { id: 1, name: "Alice", score: 95 },
    { id: 2, name: "Bob", score: 82 },
    { id: 3, name: "Charlie", score: 71 },
  ],
  [
    { id: 1, name: "Alice", score: 98 }, // score updated
    { id: 3, name: "Charlie", score: 71 }, // Bob removed
    { id: 4, name: "Diana", score: 88 }, // new entry
  ],
];

export function Reconcile() {
  const [page, setPage] = createSignal(0);
  const [users, setUsers] = createStore<User[]>(datasets[0]);

  function loadNext() {
    const next = (page() + 1) % datasets.length;
    setPage(next);
    // Without reconcile: the whole array is replaced — all rows are destroyed & recreated.
    // With reconcile({ key: "id" }): items are matched by id, so only Alice's score
    // node updates, Bob's node is removed, Diana's node is inserted.
    setUsers(reconcile(datasets[next], { key: "id" }));
  }

  return (
    <>
      <h1>reconcile</h1>
      <p>
        <code>reconcile(data, {"{ key }"})</code> diffs incoming data against the
        current store and surgically updates only what changed. It's the right tool
        when replacing a store's content from an API response — it preserves
        unchanged DOM nodes instead of recreating everything.
      </p>
      <p>Open the console — notice only changed rows log on load:</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <For each={users}>
            {(user) => {
              console.log(`Rendering row: ${user.name}`);
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
      <button onClick={loadNext} style={{ "margin-top": "1rem" }}>
        Load next dataset (page {page() + 1}/{datasets.length})
      </button>
    </>
  );
}
