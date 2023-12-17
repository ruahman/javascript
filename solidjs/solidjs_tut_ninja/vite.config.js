import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: "happy-dom",
    globals: true,
    server: {
      deps: {
        // fixes: You appear to have multiple instances of Solid. This can lead to unexpected behavior.
        inline: [/solid-js/],
      },
    },
    deps: {
      // fixes: Vitest "deps.registerNodeLoader" is deprecated. If you rely on aliases inside external packages, use "deps.optimizer.web.include" instead.
      optimizer: {
        web: {
          enabled: true,
        },
      },
    },
  },
});
