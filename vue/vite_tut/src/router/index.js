import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import MixinView from "@/views/MixinView.vue";
import ComposableView from "@/views/ComposableView.vue";
import CompositionApiView from "@/views/CompositionApiView.vue";
import ProvideAndInjectView from "@/views/ProvideAndInjectView.vue";
import StoresView from "@/views/StoresView.vue";

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
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
