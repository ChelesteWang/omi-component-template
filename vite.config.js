import { resolve } from 'path'
import Banner from 'vite-plugin-banner'

var pkg = require('./package.json')
var licensePlugin = Banner(
  `${pkg.name} v${pkg.version} http://omijs.org\r\nFront End Cross-Frameworks Framework.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/omi\r\n MIT Licensed.`
)

export default {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: pkg.name,
    },
    rollupOptions: {
      external: ['omi'],
      output: {
        globals: {
          omi: 'Omi',
        },
      },
    },
  },
  plugins: [licensePlugin],
}
