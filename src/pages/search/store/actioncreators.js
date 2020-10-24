import * as actionType from './contants';
import { getSearchSongs } from '@/services/search.js';


const changeSearchSongs = (res) => ({
  type: actionType.CHANGE_SEARCH_INFO,
  searchInfo: res.result
})

// 1.获取搜索关键词的歌单
export const changeSearchSongsAction = (keywords, limit, offset) => {
  return dispatch => {
    getSearchSongs(keywords, limit, offset).then(res => {
      dispatch(changeSearchSongs(res))
    })
  }
}