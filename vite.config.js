const multi = require('@rollup/plugin-multi-entry')
const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    lib: { name: 'multi', formats: ['es', 'umd'] },
    rollupOptions: {
      input: [resolve(__dirname, 'main.js'), resolve(__dirname, 'main-2.js')]
    }
  },
  plugins: [
    { ...multi(), enforce: 'pre' }
  ]
}
