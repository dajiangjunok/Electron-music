import React, { memo, useEffect, useRef } from 'react'
import { Carousel } from 'antd'

import YJAlbumCover from "@/components/album-cover";

import { getNewAlbumsAction } from '../../store/actionCreators'
import { NewAlbumWrapper } from './style'
import YJThemeHeaderRCM from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function YJNewAlbum () {

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    newAlbums: state.recommend.newAlbums
  }), shallowEqual)

  //其他hooks
  const carouselRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumsAction(20))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <YJThemeHeaderRCM title="新碟上架" moreLink="/discover/songs/discover/songs" />
      <div className="content">
        <div className="arrow arrow-left sprite_02"
          onClick={e => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {
              [0, 1, 2, 3].map((item, index) => {
                const currentAlbum = state.newAlbums && state.newAlbums.slice(index * 5, (index + 1) * 5)
                return (
                  <div key={item} className="page">
                    {
                      currentAlbum && currentAlbum.map((iten, indey) => {
                        return <YJAlbumCover key={iten.id} info={iten} />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02"
          onClick={e => carouselRef.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  )
})
