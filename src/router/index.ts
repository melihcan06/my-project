import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/login/LoginPage.vue'
import Consts from '@/models/Consts'
import LoginService from '@/components/login/LoginService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  //TODO: test şimdilik
  //const isAuthorize = localStorage.getItem(Consts.StorageKeys.USER)
  const isAuthorize = LoginService.isAuth()
  if (!isAuthorize && to.path != '/login') {
    location.href = '/login'
  } else if (isAuthorize && to.path == '/login') {
    location.href = from.path
  }
})

export default router
