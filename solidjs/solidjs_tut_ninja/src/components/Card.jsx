import syles from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      <h1 class={syles.test}>{props.title}</h1>
      {props.children}
    </div>
  );
}
