import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/login/LoginPage.vue'
import authService from '../services/authService'

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
  const isAuthorize = authService.isAuth()
  if (!isAuthorize && to.path != '/login') {
    location.href = '/login'
  } else if (isAuthorize && to.path == '/login') {
    location.href = from.path
  }
})

export default router
