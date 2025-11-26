import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: ["taskify-1-ej5w.onrender.com"]
  },
  preview: {
    host: true,
    allowedHosts: ["taskify-1-ej5w.onrender.com"]
  }
});
