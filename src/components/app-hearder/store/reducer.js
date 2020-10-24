import * as actionType from './constants';
import produce from 'immer'

const initialUserInfo = {
  userInfo: {},
  token: "",
  isLogin: false
}
export default (state = initialUserInfo, action) => {
  switch (action.type) {
    case actionType.CHANGE_USER_INFO:
      return produce(state, draft => {
        draft.userInfo = action.userInfo;
        draft.token = action.token;
        draft.isLogin = action.isLogin
      })
    case actionType.LAYOUT:
      return produce(state, draft => {
        draft.userInfo = action.userInfo;
        draft.token = action.token;
        draft.isLogin = action.isLogin
      })
    default:
      return state
  }
}

