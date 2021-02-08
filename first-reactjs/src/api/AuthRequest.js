import { Request } from './Request';

export class AuthRequest extends Request {
  
  async login(user, password){
    return this.post('/login', {user, password })
  }

  verifyToken(token) {

  }

}

export default new AuthRequest();