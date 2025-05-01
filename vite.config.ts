// vite.config.js
import { resolve } from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
      ],
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue': 'Vue',
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    vueJsx(),
    dts(),
    cssInjectedByJsPlugin(),
  ],
})
