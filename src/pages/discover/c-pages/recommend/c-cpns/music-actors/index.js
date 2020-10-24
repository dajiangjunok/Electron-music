import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MusicActiorsWrapper, MusicActiorsHeader, MusicActiorsContent, MusicActiorsFooter } from './style';
import { getTopArtistsAction } from '../../store/actionCreators';

export default memo(function YJMusicActiors () {
  // state props 

  // redux hooks
  const dispatch = useDispatch();
  const { musicians } = useSelector(state => ({
    musicians: state.recommend.musicians
  }))

  useEffect(() => {
    dispatch(getTopArtistsAction(5))
  }, [dispatch])

  return (
    <MusicActiorsWrapper>
      <MusicActiorsHeader>
        <h3 className="title">入驻戏子</h3>
        <span>查看全部 &gt;</span>
      </MusicActiorsHeader>
      <MusicActiorsContent>
        {
          musicians && musicians.map((item, index) => {
            return (
              <div key={item.id} className="musician-item">
                <img src={item.picUrl + '?param=62y62'} alt={item.name}></img>
                <div className="text">
                  <h3 className="name">{item.name}</h3>
                  <h3  >戏子戏子戏子</h3>
                </div>
              </div>
            )
          })
        }
      </MusicActiorsContent>
      <MusicActiorsFooter>
        <button className="default-btn">
          <a href="https://music.163.com/nmusician/web/index#/"> 申请成为网易音乐人</a>
        </button>
      </MusicActiorsFooter>
    </MusicActiorsWrapper>
  )
})
