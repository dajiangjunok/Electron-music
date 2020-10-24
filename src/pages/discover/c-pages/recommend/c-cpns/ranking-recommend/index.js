import React, { memo, useEffect } from 'react';

import YJTopRanking from '@/components/top-ranking'

import { RankingWrapper } from './style';
import YJThemeHeaderRCM from '@/components/theme-header-rcm';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopRankingsAction } from '../../store/actionCreators'

export default memo(function YJRanking () {
  // redux-hooks
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    topRankings: state.recommend.topRankings
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getTopRankingsAction())
  }, [dispatch])

  return (
    <RankingWrapper>
      <YJThemeHeaderRCM title="榜单" moreLink="/discover/songs/discover/songs" />
      <div className="tops">
        {
          state.topRankings && state.topRankings.map((item, index) => {
            return <YJTopRanking info={item} key={item.id} />
          })
        }
      </div>
    </RankingWrapper>
  )
})
