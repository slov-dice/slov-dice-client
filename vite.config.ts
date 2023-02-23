import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({ exportAsDefault: true }),
    viteImagemin(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
