import request from './axios';

export const postLogin = (data) => {
  return request({
    url: "/login/cellphone",
    method: "post",
    data
  })
}

export const layout = () => {
  return request({
    url: "/logout",
    method: "post"
  })
}