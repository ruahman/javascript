import styles from "./styles.module.css";

export function Card(props: any) {
  return (
    <div>
      <h1 class={styles.test}>{props.title}</h1>
      {props.children}
    </div>
  );
}
