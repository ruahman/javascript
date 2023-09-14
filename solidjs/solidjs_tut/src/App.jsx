import styles from "./App.module.css";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <div class={styles.root}>
      <h1>Vite + Solid</h1>
      <Card title="hello prop one">
        <p>mesage asldfjl</p>
      </Card>
      <Card title="bla bla bla">hello there</Card>
      <Card title="foobar">last message</Card>
      <Counter />
    </div>
  );
}

export default App;
