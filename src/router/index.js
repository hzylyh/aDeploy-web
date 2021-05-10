import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 安装步骤一
    path: '/installStepFirst',
    name: 'InstallStepFirst',
    component: () => import('../views/Installation/FirstStep')
  },
  { // 安装步骤二
    path: '/installStepSecond',
    name: 'InstallStepSecond',
    component: () => import('../views/Installation/SecondStep')
  }
  // { // nginx
  //   path: '/nginx',
  //   name: 'Nginx',
  //   component: () => import('../views/Installation/Nginx')
  // }
]

const router = new VueRouter({
  routes
})

export default router
