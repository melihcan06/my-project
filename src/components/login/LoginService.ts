import Consts from '@/models/Consts'
import type { IUser } from '@/models/IUser'

class LoginService {
  login(username: string, password: string): Promise<boolean> {
    //TODO: TEST şimdilik normalse servise git session bilgilerini al gel
    if (username === 'melih' && password === '12') {
      const currentUser: IUser = {
        userId: '1',
        displayName: 'Melih Can'
      }

      localStorage.setItem(Consts.StorageKeys.USER, JSON.stringify(currentUser))
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  logout() {
    localStorage.removeItem(Consts.StorageKeys.USER)
  }
}

export default new LoginService()
