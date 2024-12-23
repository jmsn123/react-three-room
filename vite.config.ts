import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/", // Set this if your app is hosted in a subdirectory
  build: {
    outDir: "dist" // Ensure the build output is in the "dist" folder
  }
});
