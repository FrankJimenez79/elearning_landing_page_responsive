import { defineConfig } from "vite";

export default defineConfig({
  base: "/elearning_landing_page_responsive/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
