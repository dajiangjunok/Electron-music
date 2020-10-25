import React, { memo, useLayoutEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import {
  changeSongDetailAction,
  addSongListAction
} from '@/pages/player/store/actionCreators';
import { Tooltip } from 'antd';

import {
  getTopRankingsTopMusicAction,
  getTopRankingsNewMusicAction,
  getTopRankingsOriginMusicAction
} from '@/pages/discover/c-pages/recommend/store/actionCreators';
import { TopRankingWrapper } from './style';

export default memo(function YJTopRanking (props) {
  // props and state
  const { info } = props
  // redux hooks
  const dispatch = useDispatch()
  const state = useSelector(state => {
    switch (info.ToplistType) {
      case 'S':
        return {
          rankings: state.recommend.sRankings
        }
      case 'N':
        return {
          rankings: state.recommend.nRankings
        }
      case 'O':
        return {
          rankings: state.recommend.oRankings
        }
      default:
        return {
          rankings: {}
        }
    }
  }, shallowEqual)

  // other hooks
  useLayoutEffect(() => {
    switch (info.ToplistType) {
      case 'S':
        dispatch(getTopRankingsTopMusicAction(info.id))
        break;
      case 'N':
        dispatch(getTopRankingsNewMusicAction(info.id))
        break;
      case 'O':
        dispatch(getTopRankingsOriginMusicAction(info.id))
        break;
      default:
        break;
    }
  }, [dispatch, info.ToplistType, info.id])
  // other handle
  const playMusic = (e) => {
    dispatch(changeSongDetailAction(e.id))
    // dispatch(changeSongInfoAction(e.id))
  }

  const collectMusic = (e) => {
    // 添加到播放列表
    dispatch(addSongListAction(e.id))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(state.rankings && state.rankings.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{state.rankings && state.rankings.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          state.rankings && state.rankings.tracks && state.rankings.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <Tooltip placement="top" title="播放">
                      <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                    </Tooltip>
                    <Tooltip placement="top" title="添加到播放列表">
                      <button className="btn sprite_icon2 addto" onClick={e => collectMusic(item)}></button>
                    </Tooltip>
                    <Tooltip placement="top" title="收藏">
                      <button className="btn sprite_02 favor" onClick={e => collectMusic(item)}></button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
