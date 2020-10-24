import React, { memo, useEffect, useRef, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { formatMinuteSecond } from '@/utils/format-utils';
import { changeSongDetailAction, changeSongListAction } from '../../store/actionCreators';
import { lyrics, lyricsTime } from '@/utils/lyc-utils';

import { PopupWrapper, PopupLeft, PopupRight } from './style';

export default memo(function YJPopup (props) {
  // props and state
  const { showPopup, currentTime } = props;
  const [lyricList, setlyricList] = useState([]);
  const [lyricTimeList, setlyricTimeList] = useState([]);
  const [scrollTop, setscrollTop] = useState(0);
  // redux hooks
  const { songList, songIndex, lyric } = useSelector(state => {
    return {
      songList: state.player.songList,
      songIndex: state.player.songIndex,
      lyric: state.player.lyric,
    }
  }, shallowEqual);

  const dispatch = useDispatch();

  // OTHER hooks
  const lycRef = useRef();

  useEffect(() => {
    const lyricList = lyrics(lyric)
    const lyricTimeList = lyricsTime(lyric)

    setlyricList(lyricList)
    setlyricTimeList(lyricTimeList);

  }, [lyric]);


  useEffect(() => {
    // const current = parseFloat(currentTime)
    const lycDomList = lycRef.current.children;

    for (let i = 0; i < lycDomList.length; i++) {
      if (lycDomList[i].className.indexOf('current-lyc') !== -1) {
        if (i > 4) {
          setscrollTop((i - 3) * 32)
          lycRef.current.scrollTop = scrollTop
        }
      }
    }
  }, [currentTime, scrollTop]);

  // handle function
  const musicPlay = (item) => {
    dispatch(changeSongDetailAction(item.id));
  }

  const deleteMusic = (e, index) => {
    e.stopPropagation();
    // 删除列表的音乐
    const musicList = [...songList]
    musicList.splice(index, 1);
    dispatch(changeSongListAction(musicList));
  }

  const deleteMusicAll = () => {
    dispatch(changeSongListAction([]));
  }

  return (
    <PopupWrapper className="wrap-v2">
      <PopupLeft>
        <div className="popup-left-hearder">
          <h2 className="title">播放列表(<span>{songList.length}</span>)</h2>
          <div>
            <span className="collect"><i className="iconfont icon-yinpinwenjian"></i>收藏全部</span>
            <span className="delete" onClick={e => { deleteMusicAll() }}><i className="iconfont icon-shanchu" ></i>清除</span>
          </div>
        </div>
        <div className="popup-left-content">
          {
            songList.map((item, index) => {
              return (
                <div className="song-list" key={item.id} onClick={e => musicPlay(item)}>
                  <p className="music-name">
                    <i className={'sprite_playlist play' + ((index !== songIndex) ? 'hidden-play' : '')}></i>
                    {item.name}
                  </p>
                  <div className="al-name">
                    <div className="icon">
                      <i className="iconfont icon-yinpinwenjian"></i>
                      <i className="iconfont icon-daochu1"></i>
                      <i className="iconfont icon-baocun"></i>
                      <i className="iconfont icon-shanchu" onClick={e => { deleteMusic(e, index) }}></i>
                    </div>
                    <p>{item.ar[0].name}</p>
                  </div>
                  <p className="dt">{formatMinuteSecond(item.dt)}</p>
                </div>
              )
            })
          }
        </div>
      </PopupLeft>
      <PopupRight>
        <div className="popup-right-hearder">
          <i className="iconfont icon-guandiao" onClick={e => showPopup()}></i>
          <h2 className="title">{songList[songIndex] && songList[songIndex].name}</h2>
        </div>
        <div className="listlyric" ref={lycRef}  >
          {
            lyricList && lyricList.map((item, index) => {
              return <p time={lyricTimeList[index]}
                className={"j-flag " +
                  ((parseFloat(currentTime) >= parseFloat(lyricTimeList[index]) && parseFloat(currentTime) <= parseFloat(lyricTimeList[index + 1])) ? 'current-lyc' : '')} key={'' + item + index}>
                {item}
              </p>
            })
          }
        </div>
      </PopupRight>
    </PopupWrapper>
  )
})