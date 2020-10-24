import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { YJDiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom';


export default memo(function YJDiscover (props) {
  const { route } = props

  return (
    <YJDiscoverWrapper>
      <TopMenu>
        <ul className="wrap-v2 top-content">
          {
            dicoverMenu.map((item, index) => {
              return (
                <li key={item.title}>
                  <NavLink className="link" to={item.link}>
                    {item.title}
                    {
                      index === 2 && <i className="iconfont iconr"></i>
                    }
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </TopMenu>
      {renderRoutes(route.routes)}
    </YJDiscoverWrapper>
  )
})
