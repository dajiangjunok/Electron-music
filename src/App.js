import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd'; // 引入ConfigProvider全局化配置
import zhCN from 'antd/es/locale/zh_CN';  // 引入中文包

import routes from "@/router";

import YJAppHeader from 'components/app-hearder';
import YJAppFooter from 'components/app-footer';
import YJPlayer from '@/pages/player/app-play-bar'
import { HashRouter } from 'react-router-dom';
import store from './store';

// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/lib/integration/react'

export default memo(function App () {


  return (
    <div>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <HashRouter>
            <YJAppHeader />
            {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
            {renderRoutes(routes)}
            {/* </PersistGate> */}
            <YJAppFooter />
            <YJPlayer />
          </HashRouter>
        </ConfigProvider>
      </Provider>
    </div>
  )
})

