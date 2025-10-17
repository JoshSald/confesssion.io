/* eslint-disable no-undef */
import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env files based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        // proxy /api/* to your n8n webhook
        "/api": {
          target: env.VITE_WEBHOOK_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
