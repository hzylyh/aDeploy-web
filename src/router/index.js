import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 安装步骤一
    path: '/installStepFirst',
    name: 'InstallStepFirst',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Installation/FirstStep')
  }
]

const router = new VueRouter({
  routes
})

export default router
