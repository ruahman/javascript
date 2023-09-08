import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

let app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
