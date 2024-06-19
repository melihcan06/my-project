import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/login/LoginPage.vue'
import loginService from '../services/authService'

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
    }
  ]
})

router.beforeEach((to, from) => {
  //TODO: test şimdilik
  //const isAuthorize = localStorage.getItem(Consts.StorageKeys.USER)
  const isAuthorize = loginService.isAuth()
  if (!isAuthorize && to.path != '/login') {
    location.href = '/login'
  } else if (isAuthorize && to.path == '/login') {
    location.href = from.path
  }
})

export default router
