import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "/var/www/clients/client0/web1/web", // Ersetze 'mein-ausgabe-verzeichnis' durch deinen gewünschten Pfad
  },
  plugins: [react()],
});
