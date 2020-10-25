import React, { memo, useRef, useState, useCallback, useLayoutEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { formatMinuteSecond } from '@/utils/format-utils';
import { changeSongInfoAction, showPanleAction, changeSequenceAction, changeSongIndexAction, changeCurrentSongAction, changeLrcAction } from '../store/actionCreators'

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import YJPopup from '../c-cpns/popup';

export default memo(function YJPlayer () {
  // props and state

  //  redux hooks
  const dispatch = useDispatch();
  const { currentSong, songInfo, songList, showPanel, sequence, songIndex } = useSelector(state => {
    return {
      currentSong: state.player.currentSong,
      songInfo: state.player.songInfo,
      songList: state.player.songList,
      showPanel: state.player.showPanel,
      sequence: state.player.sequence,
      songIndex: state.player.songIndex
    }
  }, shallowEqual);
  // 渲染数据
  const duration = (currentSong && currentSong.dt) || 0;
  const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || '';
  const musicName = (currentSong && currentSong.name) || '未知音乐';
  const musician = (currentSong && currentSong.ar && currentSong.ar[0].name) || '未知歌手';

  const songListNum = songList.length;

  // 其他Hooks
  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const arr = Object.keys(currentSong);
    if (arr.length !== 0) {
      dispatch(changeSongInfoAction(currentSong.id));
    }
  }, [dispatch, currentSong])

  useLayoutEffect(() => {
    const arr = Object.keys(currentSong);
    if (arr.length !== 0) {
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 500)
    }
  }, [currentSong])

  useLayoutEffect(() => {
    if (Object.keys(currentSong).length === 0 && songList.length !== 0) {
      dispatch(changeCurrentSongAction(songList[0]))
      dispatch(changeLrcAction(songList[0].id))
    }
  }, [songList, currentSong, dispatch])

  // 其他业务
  const showPopup = () => {
    const flag = !showPanel
    dispatch(showPanleAction(flag))
  }
  const changeSequence = () => {
    const currentSequence = sequence;
    if (currentSequence === 0) dispatch(changeSequenceAction(1))
    if (currentSequence === 1) dispatch(changeSequenceAction(2))
    if (currentSequence === 2) dispatch(changeSequenceAction(0))
  }

  const play = useCallback(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, [audioRef])

  const pause = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, [audioRef])

  const playMusic = useCallback(() => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    } else {
      pause();
      setIsPlaying(false);
    }
  }, [isPlaying, play, pause]);

  const preMusic = (sequence) => {
    if (sequence === 0 || sequence === 2) {
      if (songIndex !== 0) {
        const currentSong = songList[songIndex - 1]
        dispatch(changeSongIndexAction(songIndex - 1));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      } else {
        const currentSong = songList[songList.length - 1]
        dispatch(changeSongIndexAction(songList.length - 1));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      }

    } else if (sequence === 1) {
      let index = parseInt(Math.random(0, 1) * (songList.length));
      while (index === songIndex) {
        index = parseInt(Math.random(0, 1) * (songList.length));
      }
      const currentSong = songList[index]
      dispatch(changeSongIndexAction(index));
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(changeLrcAction(currentSong.id));
    }
  }

  const nextMusic = (sequence) => {
    if (sequence === 0 || sequence === 2) {
      if (songIndex !== (songList.length - 1)) {
        const currentSong = songList[songIndex + 1]
        dispatch(changeSongIndexAction(songIndex + 1));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      } else {
        const currentSong = songList[0]
        dispatch(changeSongIndexAction(0));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      }

    } else if (sequence === 1) {
      let index = parseInt(Math.random(0, 1) * (songList.length));
      while (index === songIndex) {
        index = parseInt(Math.random(0, 1) * (songList.length));
      }
      const currentSong = songList[index]
      dispatch(changeSongIndexAction(index));
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(changeLrcAction(currentSong.id));
    }
  }

  const timeUpdate = (e) => {
    const currentTimeNow = parseInt(e.target.currentTime * 1000) / 1000;

    if (!isChanging) {
      setCurrentTime(currentTimeNow);
      setProgress((currentTimeNow * 1000) / duration * 100);
    }
  }

  const timeEnd = (e) => {
    if (sequence === 0) {
      if (songIndex !== (songList.length - 1)) {
        const currentSong = songList[songIndex + 1]
        dispatch(changeSongIndexAction(songIndex + 1));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      } else {
        const currentSong = songList[0]
        dispatch(changeSongIndexAction(0));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeLrcAction(currentSong.id));
      }
    } else if (sequence === 2) {
      play()
    } else if (sequence === 1) {
      let index = parseInt(Math.random(0, 1) * (songList.length));
      while (index === songIndex) {
        index = parseInt(Math.random(0, 1) * (songList.length));
      }
      const currentSong = songList[index]
      dispatch(changeSongIndexAction(index));
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(changeLrcAction(currentSong.id));
    }
  }

  const sliderChange = useCallback((progress) => {
    setIsChanging(true);
    setProgress(progress);
    setCurrentTime((progress / 100) * (duration / 1000));
  }, [duration])


  const sliderAfterChange = useCallback(() => {
    setIsChanging(false);
    const currentTime = (progress / 100) * (duration / 1000);
    audioRef.current.currentTime = currentTime;
    audioRef.current.play();
    setIsPlaying(true);
  }, [duration, progress]);

  return (
    <PlaybarWrapper className="sprite_playbar" >
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev" onClick={e => preMusic(sequence)}></button>
          <button className="sprite_playbar btn play" onClick={e => playMusic()} ></button>
          <button className="sprite_playbar btn next" onClick={e => nextMusic(sequence)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={picUrl + "?param=34y34"} alt="" />
            </NavLink>
          </div>
          <div className="info">
            {
              ((songInfo && songInfo[0]) && (songInfo && songInfo[0].url)) ? (<div className="song">
                <span className="song-name">{musicName}</span>
                <span className="singer-name">{musician}</span>
              </div>) : (<div className="song"> <span className="song-name">暂无版权</span></div>)
            }
            <div className="progress">
              <Slider tipFormatter={null} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence} >
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_playbar btn playlist" onClick={showPopup}>
              {songListNum}
            </button>
          </div>
        </Operator>
      </div>
      <audio src={(songInfo && songInfo[0]) && songInfo[0].url}
        ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnd} />
      {showPanel && <YJPopup showPopup={showPopup} currentTime={currentTime} />}
    </PlaybarWrapper>
  )
})
