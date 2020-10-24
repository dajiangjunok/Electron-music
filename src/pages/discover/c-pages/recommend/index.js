import React, { memo } from 'react';

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import YJTopBanners from './c-cpns/top-banners';
import YJHotRecommend from './c-cpns/hot-recommend';
import YJNewAlbum from './c-cpns/new-album';
import YJRanking from './c-cpns/ranking-recommend';
import YJUserLogin from './c-cpns/user-login';
import YJMusicActiors from './c-cpns/music-actors';
import YJMusicAnchor from './c-cpns/music-anchor';

function YJRecommend(props) {

  return (
    <RecommendWrapper>
      <YJTopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <YJHotRecommend />
          <YJNewAlbum />
          <YJRanking />
        </RecommendLeft>
        <RecommendRight>
          <YJUserLogin />
          <YJMusicActiors />
          <YJMusicAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(YJRecommend)






// function Recommend (props) {
//   const { getBanners } = props

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       Recommend
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
