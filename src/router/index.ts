import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/login/LoginPage.vue'
//import { useAuthStore } from '@/stores/authStore'

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
      //props: { doLogout: true }
    }
  ]
})

/*router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  //debugger
  if (!authStore.isAuth && to.path != '/login') {
    location.href = '/login'
  } else if (authStore.isAuth && to.path == '/login') {
    location.href = from.path
  }*/
/*if (to.meta.authRequired && !authStore.isAuth) {
    location.href = '/login'
  }
})*/

export default router
