import {TYPE} from '../actions/actionType'

const initialState = {isLogin: false};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
  switch(action.type){
    case TYPE.LOG_OUT:
    case TYPE.AUTHENTICATED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}