import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({ exportAsDefault: true }),
    viteImagemin(),
    VitePWA({
      manifest:{
        theme_color: "#212121",
        background_color: "#212121",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Slov Dice",
        short_name: "SD",
        categories: ["game", "lifestyle", "utilities"],
        description: "D&D environment",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
