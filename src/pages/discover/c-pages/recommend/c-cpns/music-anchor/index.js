import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MusicAnchorWrapper, MusicAnchorHeader, MusicAnchorContent } from './style';
import { getHotAnthorsAction } from '../../store/actionCreators';

export default memo(function YJMusicAnchor () {
  // state props 

  // redux hooks
  const dispatch = useDispatch();
  const { anchors } = useSelector(state => ({
    anchors: state.recommend.anchors
  }))

  useEffect(() => {
    dispatch(getHotAnthorsAction(5));
  }, [dispatch])

  return (
    <MusicAnchorWrapper>
      <MusicAnchorHeader>
        <h3 className="title">热门主播</h3>
        <span>查看全部 &gt;</span>
      </MusicAnchorHeader>
      <MusicAnchorContent>
        {
          anchors && anchors.map(item => {
            return (
              <div key={item.id} className="anthor-item">
                <img alt="item.nickName" src={item.avatarUrl + '?param=45y45'} />
                <div className="text">
                  <p>{item.nickName}</p>
                  <p>主播主播主播</p>
                </div>
              </div>
            )
          })
        }
      </MusicAnchorContent>
    </MusicAnchorWrapper>
  )
})
