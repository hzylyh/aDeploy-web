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
  },
  { // 安装步骤二
    path: '/installStepSecond',
    name: 'InstallStepSecond',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Installation/SecondStep')
  }
  // { // 安装步骤三
  //   path: '/installStepThird',
  //   name: 'InstallStepThird',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Installation/ThirdStep')
  // }
]

const router = new VueRouter({
  routes
})

export default router
