import * as actionType from './constants';
import { getSongDetail, getSongInfo, getSongLyric } from '../../../services/player';
import { message } from 'antd';

const getSongInfoAction = (res) => ({
  type: actionType.CHANGE_SONG_INFO,
  songInfo: res.data
});

// 改变歌单列表
export const changeSongListAction = (List) => ({
  type: actionType.CHANGE_SONG_LIST,
  songList: List
});


// 改变歌曲播放列表索引
export const changeSongIndexAction = (index) => ({
  type: actionType.CHANGE_SONG_INDEX,
  songIndex: index
});

// 改变当前歌曲
export const changeCurrentSongAction = (song) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong: song
});
// 歌曲歌词
const changeSongLyricAction = (lrc) => {
  return {
    type: actionType.CHANGE_SONG_LYRIC,
    lyric: lrc ? lrc.lyric : ''
  }
}
// 改变播放顺序
const changeSequenceIndexAction = (num) => {
  return {
    type: actionType.CHANGE_SEQUENCE,
    sequence: num
  }

}

// 1.获取歌曲详情列表
export const changeSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const songList = getState().player.songList;
    const songIndex = songList.findIndex(song => song.id === ids);
    if (songIndex !== -1) { //含有这首歌
      const currentSong = songList[songIndex];
      dispatch(changeSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong))
      dispatch(changeLrcAction(ids))

    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        const newSongList = [...songList, song]

        dispatch(changeSongListAction(newSongList));
        dispatch(changeSongIndexAction(newSongList.length - 1));
        dispatch(changeCurrentSongAction(song));
      })
      dispatch(changeLrcAction(ids))
    }
  }
}

// 2.获取歌曲的详细信息
export const changeSongInfoAction = (id) => {
  return dispatch => {
    getSongInfo(id).then(res => {
      dispatch(getSongInfoAction(res))
    })
  }
}

// 3.添加歌曲到播放列表【不改变currentSong , songIndex】
export const addSongListAction = (ids) => {
  return (dispatch, getState) => {
    const songList = getState().player.songList;
    const songIndex = songList.findIndex(song => song.id === ids);

    if (songIndex === -1) { //不含有这首歌
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        const newSongList = [...songList, song]
        dispatch(changeSongListAction(newSongList));
      })
    } else {
      message.info(actionType.SAME_SONG);
    }
  }
}

// 4.修改打开播放歌词弹窗
export const showPanleAction = (flag) => ({
  type: actionType.SHOW_PANEL,
  showPanel: flag
})

// 5.控制歌曲播放的顺序 1是随机播放  2是单曲循环   默认是顺序播放
export const changeSequenceAction = (num) => {
  return dispatch => {
    dispatch(changeSequenceIndexAction(num))
  }
}

// 6.更改歌词
export const changeLrcAction = (id) => {
  return dispatch => {
    getSongLyric(id).then(res => {
      dispatch(changeSongLyricAction(res.lrc))
    })
  }
}