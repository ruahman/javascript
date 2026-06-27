import { createSignal, createResource, useTransition, Suspense } from "solid-js";

type User = { id: number; name: string; role: string };

async function fakeUser(id: number): Promise<User> {
  await new Promise((r) => setTimeout(r, 800));
  return {
    id,
    name: `User #${id}`,
    role: id % 2 === 0 ? "Admin" : "Member",
  };
}

function UserCard(props: { user: User }) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Role: {props.user.role}</p>
      <p>ID: {props.user.id}</p>
    </div>
  );
}

export function Transition() {
  const [userId, setUserId] = createSignal(1);
  const [pending, start] = useTransition();
  const [user] = createResource(userId, fakeUser);

  return (
    <>
      <h1>useTransition</h1>
      <p>
        <code>useTransition</code> defers a state update so the UI stays
        interactive while async work resolves. The old content remains visible
        (faded) while <code>pending()</code> is <code>true</code>, avoiding an
        intermediate loading flash.
      </p>

      <div>
        <button
          onClick={() => start(() => setUserId((id) => Math.max(1, id - 1)))}
          disabled={userId() <= 1 || pending()}
        >
          ← Prev
        </button>
        <button
          onClick={() => start(() => setUserId((id) => id + 1))}
          disabled={pending()}
        >
          Next →
        </button>
        {pending() && (
          <span style={{ "margin-left": "0.75rem", color: "#a78bfa" }}>
            Loading…
          </span>
        )}
      </div>

      <Suspense fallback={<p>Initial load…</p>}>
        <div
          style={{
            opacity: pending() ? "0.45" : "1",
            transition: "opacity 0.25s",
            "margin-top": "1.25rem",
          }}
        >
          {user() && <UserCard user={user()!} />}
        </div>
      </Suspense>
    </>
  );
}
