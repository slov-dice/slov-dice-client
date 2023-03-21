// vite.config.ts
import { defineConfig } from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/vite-tsconfig-paths/dist/index.mjs";
import react from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/vite-plugin-svgr/dist/index.mjs";
import viteImagemin from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/vite-plugin-imagemin/dist/index.mjs";
import { VitePWA } from "file:///D:/code/projects/slov-dice/slov-dice-client/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({ exportAsDefault: true }),
    viteImagemin(),
    VitePWA({
      manifest: {
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
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHByb2plY3RzXFxcXHNsb3YtZGljZVxcXFxzbG92LWRpY2UtY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHByb2plY3RzXFxcXHNsb3YtZGljZVxcXFxzbG92LWRpY2UtY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3Byb2plY3RzL3Nsb3YtZGljZS9zbG92LWRpY2UtY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIHJlYWN0KCksXHJcbiAgICBzdmdyKHsgZXhwb3J0QXNEZWZhdWx0OiB0cnVlIH0pLFxyXG4gICAgdml0ZUltYWdlbWluKCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgbWFuaWZlc3Q6e1xyXG4gICAgICAgIHRoZW1lX2NvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgICAgICBzY29wZTogXCIvXCIsXHJcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgICAgICBuYW1lOiBcIlNsb3YgRGljZVwiLFxyXG4gICAgICAgIHNob3J0X25hbWU6IFwiU0RcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXCJnYW1lXCIsIFwibGlmZXN0eWxlXCIsIFwidXRpbGl0aWVzXCJdLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkQmRCBlbnZpcm9ubWVudFwiLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbi0xOTJ4MTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbi0yNTZ4MjU2LnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIyNTZ4MjU2XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbi0zODR4Mzg0LnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIzODR4Mzg0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvaWNvbi01MTJ4NTEyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBkZWZpbmU6IHtcclxuICAgIEFQUF9WRVJTSU9OOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKSxcclxuICB9LFxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIGxvZ092ZXJyaWRlOiB7ICd0aGlzLWlzLXVuZGVmaW5lZC1pbi1lc20nOiAnc2lsZW50JyB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlQsU0FBUyxvQkFBb0I7QUFDMVYsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUN6QixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sS0FBSyxFQUFFLGlCQUFpQixLQUFLLENBQUM7QUFBQSxJQUM5QixhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsTUFDTixVQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixZQUFZLENBQUMsUUFBUSxhQUFhLFdBQVc7QUFBQSxRQUM3QyxhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGFBQWEsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsYUFBYSxFQUFFLDRCQUE0QixTQUFTO0FBQUEsRUFDdEQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
