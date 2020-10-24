import React from 'react';

import YJDiscover from '../pages/discover';
import YJRecommend from '../pages/discover/c-pages/recommend';
import YJRanking from '../pages/discover/c-pages/ranking';
import YJSongs from '../pages/discover/c-pages/songs';
import YJDjradio from '../pages/discover/c-pages/djradio';
import YJArtist from '../pages/discover/c-pages/artist';
import YJAlbum from '../pages/discover/c-pages/album';

import YJMine from '../pages/mine';
import YJFriend from '../pages/friend';
import YJSearch from '../pages/search';

import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: "/discover",
    component: YJDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        component: YJRecommend
      },
      {
        path: "/discover/ranking",
        component: YJRanking
      },
      {
        path: "/discover/songs",
        component: YJSongs
      },
      {
        path: "/discover/djradio",
        component: YJDjradio
      },
      {
        path: "/discover/artist",
        component: YJArtist
      },
      {
        path: "/discover/album",
        component: YJAlbum
      }
    ]
  },
  {
    path: "/mine",
    component: YJMine
  },
  {
    path: "/friend",
    component: YJFriend
  }, {
    path: "/search",
    component: YJSearch
  }

];

export default routes;