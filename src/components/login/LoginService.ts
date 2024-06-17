import Consts from '@/models/Consts'
import type { IUser } from '@/models/IUser'

class LoginService {
  async login(username: string, password: string): Promise<boolean> {
    //TODO: TEST şimdilik normalse servise git session bilgilerini al gel
    if (username === 'melih' && password === '12') {
      const currentUser: IUser = {
        userId: '1',
        displayName: 'Melih Can'
      }

      localStorage.setItem(Consts.StorageKeys.USER, JSON.stringify(currentUser))
      localStorage.setItem(Consts.StorageKeys.IS_AUTH, JSON.stringify(true))
      return Promise.resolve(true)
    }
    localStorage.setItem(Consts.StorageKeys.IS_AUTH, JSON.stringify(false))
    return Promise.resolve(false)
  }

  isAuth(): boolean {
    return JSON.parse(localStorage.getItem(Consts.StorageKeys.IS_AUTH) || 'false')
  }

  logout() {
    localStorage.removeItem(Consts.StorageKeys.USER)
    localStorage.removeItem(Consts.StorageKeys.IS_AUTH)
  }
}

export default new LoginService()
