import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Adjust if your app is hosted in a subdirectory
  build: {
    outDir: "dist" // Ensure the output directory is "dist"
  }
});
