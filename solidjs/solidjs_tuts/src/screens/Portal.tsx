import { Portal } from "solid-js/web";
import "../style.css";

// portal takes out section an puts it a div in the document body,
// this is good for popups
export function PortalScreen() {
  return (
    <div class="app-container">
      <p>Just some text inside a div that has a restricted size.</p>
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>Some text you might need for something or other.</p>
        </div>
      </Portal>
    </div>
  );
}
