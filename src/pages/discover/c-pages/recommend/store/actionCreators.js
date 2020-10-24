import * as actionType from './constants';
import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopRankings,
  getTopRankingMusicList,
  getTopArtists,
  getHotAnthors
} from "@/services/recommend";

import { changeSongListAction } from '@/pages/player/store/actionCreators';

import {
  getSongDetail
} from "@/services/player";

const changeTopBannerAction = res => ({
  type: actionType.CAHNGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommend = res => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

const changeNewAlbums = res => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  newAlbums: res.monthData
})

const changeTopRankings = res => ({
  type: actionType.CHANGE_RANKINGS,
  topRankings: res.list && res.list.slice(0, 3)
})
// 三个排行榜的具体数据
const changeSrankings = res => ({
  type: actionType.CHANGE_S_RANKINGS,
  sRankings: res.playlist
})
const changeNrankings = res => ({
  type: actionType.CHANGE_N_RANKINGS,
  nRankings: res.playlist
})
const changeOrankings = res => ({
  type: actionType.CHANGE_O_RANKINGS,
  oRankings: res.playlist
})

const changeCrankings = res => ({
  type: actionType.CHANGE_C_RANKINGS,
  cRankings: res.playlist
})

const changeMusicians = res => ({
  type: actionType.CHANGE_MUSICIAN,
  musicians: res.artists
})

const changeAnchor = res => ({
  type: actionType.CHANGE_ANCHOR,
  anchors: res && res.list
})

// 1.轮播图 数据action
export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}

// 2.热门推荐 数据action
export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommend(res));
    })
  }
}

// 3.新碟上架 数据action
export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbums(res));
    })
  }
}

// 4.榜单 数据action
export const getTopRankingsAction = () => {
  return dispatch => {
    getTopRankings().then(res => {
      dispatch(changeTopRankings(res));
    })
  }
}

// 5.榜单TOP具体音乐 数据action
export const getTopRankingsTopMusicAction = (id) => {
  return dispatch => {
    getTopRankingMusicList(id).then(res => {
      dispatch(changeSrankings(res));
    })
  }
}
// 5.榜单NEW具体音乐 数据action
export const getTopRankingsNewMusicAction = (id) => {
  return dispatch => {
    getTopRankingMusicList(id).then(res => {
      dispatch(changeNrankings(res));
    })
  }
}
// 5.榜单ORIGIN具体音乐 数据action
export const getTopRankingsOriginMusicAction = (id) => {
  return dispatch => {
    getTopRankingMusicList(id).then(res => {
      dispatch(changeOrankings(res));
    })
  }
}


// 6.获取热门推荐中点击后具体音乐
export const getCoverMusicAction = (id) => {
  return (dispatch, getState) => {
    getTopRankingMusicList(id).then(res => {
      dispatch(changeCrankings(res));
    }).then(() => {
      const musicList = getState().recommend.cRankings.tracks;
      musicList.forEach(item => {
        getSongDetail(item.id).then(res => {
          const songList = getState().player.songList;
          const song = res.songs && res.songs[0];
          let newSongsList = [];
          const flag = songList.some(item => {
            return item.id === song.id;
          })
          if (!flag) newSongsList = [...songList, song];
          dispatch(changeSongListAction(newSongsList));
        })
      })

    })
  }
}

// 获取热门歌手
export const getTopArtistsAction = (limit) => {
  return dispatch => {
    getTopArtists(limit).then(res => {
      dispatch(changeMusicians(res));
    })
  }
}

// 获取热门主播
export const getHotAnthorsAction = (limit) => {
  return dispatch => {
    getHotAnthors(limit).then(res => {
      dispatch(changeAnchor(res.data));
    })
  }
}