import {TYPE} from './actionType';


const authenticated = {
  type: TYPE.AUTHENTICATED,
  payload: {
    isLogin: true,
  },
}

const logout = {
  type: TYPE.LOG_OUT,
  payload: {
    isLogin: false,
  }
}

export {
  authenticated,
  logout,
}