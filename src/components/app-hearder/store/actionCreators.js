import * as actionType from './constants';
import { postLogin, layout } from '@/services/login';

const changeLoginAction = (data) => ({
  type: actionType.CHANGE_USER_INFO,
  userInfo: data.profile,
  token: data.token,
  isLogin: true
})

const changeLayoutAction = (data) => ({
  type: actionType.LAYOUT,
  userInfo: {},
  token: "",
  isLogin: false
})

export const changeUserInfoAction = (data) => {
  return dispatch => {
    postLogin(data).then(res => {
      dispatch(changeLoginAction(res))
    })
  }
}

export const layoutAction = () => {
  return dispatch => {
    layout().then(res => {
      dispatch(changeLayoutAction())
    })
  }
}