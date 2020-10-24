import request from './axios';

export const getSearchSongs = (keywords, limit = null, offset = null) => {
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      offset
    }
  })
}