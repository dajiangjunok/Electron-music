import request from './axios';

export const getSongDetail = (ids) => {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export const getSongInfo = (id) => {
  return request({
    url: "/song/url",
    params: {
      id
    }
  })
}


export const getSongLyric = (id) => {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}