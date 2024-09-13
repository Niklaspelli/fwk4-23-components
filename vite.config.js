import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@button": "/src/components/button",
      "@cards": "/src/components/cards",
      /*  "@headlines": "/src/components/headlines", */
      "@infoUser": "/src/components/infoUser",
      "@label": "/src/components/label",
      "@login": "/src/components/login",
      "@logo": "/src/components/logo",
      "@register": "/src/components/register",
      "@search": "/src/components/search",
      "@universalButton": "/src/components/universalButton",
    },
  },
});
// how to import
// import Example from "@example/Example"
