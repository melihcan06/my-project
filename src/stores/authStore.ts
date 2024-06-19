import loginService from '../services/authService'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = loginService.getUser()
  const isAuth = loginService.isAuth()

  const login = async (username: string, password: string) => {
    return await loginService.login(username, password)
  }

  const logout = async () => {
    await loginService.logout()
  }

  return {
    user,
    isAuth,
    login,
    logout
  }
})
