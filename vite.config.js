import { resolve } from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'Component'
    },
    rollupOptions: {
      external: ['omi'],
      output: {
        globals: {
          omi: 'Omi'
        }
      }
    }
  }
};
