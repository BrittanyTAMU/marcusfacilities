import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

/** Serve public/slug/index.html at /slug/ before the SPA homepage fallback. */
function publicDirectoryIndex(): Plugin {
  return {
    name: "public-directory-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const raw = req.url?.split("?")[0] ?? "";
        if (raw.endsWith("/")) {
          const file = path.join(__dirname, "public", raw, "index.html");
          if (fs.existsSync(file)) {
            req.url = `${raw}index.html`;
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use "/" for custom domain or repo named username.github.io; use "/REPO-NAME/" for username.github.io/REPO-NAME/
  base: mode === "production" ? "/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true,
    },
  },
  plugins: [publicDirectoryIndex(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
