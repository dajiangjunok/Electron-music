import React, { memo, useEffect, useRef, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannersAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from './style'

export default memo(function YJTopBanners () {

  // 组件和redux关联：获取数据和dispatch操作
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.recommend.topBanners
  }), shallowEqual)

  // 其他的Hook
  const carouselRef = useRef()

  const [bgImage, setbgImage] = useState((state.topBanners && state.topBanners[0]) ? (state.topBanners[0].imageUrl + '?imageView&blur=40x20') : null)

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  function afterChange (from, to) {
    const bgImageUrl = state.topBanners && (state.topBanners[to] && state.topBanners[to].imageUrl)

    setbgImage(bgImageUrl + '?imageView&blur=40x20')
  }

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true} ref={carouselRef} beforeChange={afterChange}>
            {
              state.topBanners && state.topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" alt="" src={item.imageUrl}></img>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => carouselRef.current.prev()}></button>
          <button className="btn right" onClick={e => carouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
