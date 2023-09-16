import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import MixinView from "@/views/MixinView.vue";
import ComposableView from "@/views/ComposableView.vue";
import CompositionApiView from "@/views/CompositionApiView.vue";
import ProvideAndInjectView from "@/views/ProvideAndInjectView.vue";
import StoresView from "@/views/StoresView.vue";
import CounterView from "@/views/CounterView.vue";
import ModalView from "@/views/ModalView.vue";

let routes = [
  {
    path: "/",
    name: "composition",
    component: CompositionApiView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/mixin",
    name: "Mixin",
    component: MixinView,
  },
  {
    path: "/composable",
    name: "Composable",
    component: ComposableView,
  },
  {
    path: "/provide-and-inject",
    name: "ProvideAndInject",
    component: ProvideAndInjectView,
  },
  {
    path: "/store",
    name: "store",
    component: StoresView,
  },
  {
    path: "/counter",
    name: "counter",
    component: CounterView,
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalView,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
