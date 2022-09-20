// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import vitePluginLibInsertUnocss from 'vite-plugin-lib-insert-unocss'
import dts from 'vite-plugin-dts'
import vitePluginInspectorLibCss from 'vite-plugin-inspector-lib-css'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue',],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vueJsx(),
    dts(),
    cssInjectedByJsPlugin(),
    vitePluginLibInsertUnocss(),
    vitePluginInspectorLibCss(),
  ]
})

// function vitePluginInspectorLibCss(options?: Record<string, any>) {
//   let styles = ''
//   const defaultConfig = Object.assign({
//     presets: [
//       presetUno(),
//       presetAttributify(),
//     ]
//   }, options)
//   return {
//     name: 'vite-plugin-Inspector-lib-css',
//     apply: 'build',
//     enforce: 'pre',
//     writeBundle: {
//       order: 'post',
//       handler(options: any, bundle: any) {
//         if (!styles) return
//         const name = options.entryFileNames
//         const outputPath = path.resolve(options.dir, name)
//         const cssCode = JSON.stringify(styles.replace(/\n/g, ' '))
//         const insertStyle = `try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(${cssCode}));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-Inspector-lib-css', e);}`;
//         const { code } = bundle[name]
//         console.log(cssCode)
//         fs.writeFile(outputPath, insertStyle + code, (err) => {
//           if (err) {
//             throw err
//           }
//         })
//       }
//     },
//     transform: {
//       order: 'pre',
//       handler(code: string) {
//         if (!code.startsWith('// @unocss-include'))
//           return code
//         createGenerator({}, defaultConfig).generate(code || '').then((result) => {
//           const css = result.getLayers()
//           if (styles.indexOf(css) === -1)
//             styles += result.getLayers() + ' '
//         })
//       }
//     },
//   }
// }
