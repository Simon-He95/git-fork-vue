import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
// import gitFork from '@simon_he/git-fork'
import gitForkInVue from '../../src'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
console.log(gitForkInVue)
app.component('GitFork', gitForkInVue)
// console.log(gitFork.setup({}))
// const foo = createApp(gitFork.setup({
//   color: 'red'
// }))
// console.log(foo)
app.use(router)
console.log(app.mount('#app'))
