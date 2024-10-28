import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000", // Your backend server
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""), // Strip '/api' from the request URL
  //     },
  //   },
  // },
});
