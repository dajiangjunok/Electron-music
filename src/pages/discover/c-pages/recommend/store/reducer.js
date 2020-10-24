// import { Map } from 'immutable';
import produce from 'immer';
import * as actionType from './constants';

const initialState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topRankings: [],
  sRankings: [],
  nRankings: [],
  oRankings: [],
  cRankings: [],
  musicians: [],
  anchors: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionType.CAHNGE_TOP_BANNERS:
      // return state.set('topBanners', action.topBanners);
      return produce(state, draft => {
        draft.topBanners = action.topBanners;
      });
    case actionType.CHANGE_HOT_RECOMMENDS:
      // return state.set('hotRecommends', action.hotRecommends);
      return produce(state, draft => {
        draft.hotRecommends = action.hotRecommends;
      });
    case actionType.CHANGE_NEW_ALBUMS:
      // return state.set('newAlbums', action.newAlbums);
      return produce(state, draft => {
        draft.newAlbums = action.newAlbums;
      });
    case actionType.CHANGE_RANKINGS:
      // return state.set('topRankings', action.topRankings);
      return produce(state, draft => {
        draft.topRankings = action.topRankings;
      });
    case actionType.CHANGE_S_RANKINGS:
      // return state.set('sRankings', action.sRankings);
      return produce(state, draft => {
        draft.sRankings = action.sRankings;
      });
    case actionType.CHANGE_N_RANKINGS:
      // return state.set('nRankings', action.nRankings);
      return produce(state, draft => {
        draft.nRankings = action.nRankings;
      });
    case actionType.CHANGE_O_RANKINGS:
      // return state.set('oRankings', action.oRankings);
      return produce(state, draft => {
        draft.oRankings = action.oRankings;
      });
    case actionType.CHANGE_C_RANKINGS:
      // return state.set('cRankings', action.cRankings);
      return produce(state, draft => {
        draft.cRankings = action.cRankings;
      });
    case actionType.CHANGE_MUSICIAN:
      // return state.set('musicians', action.musicians);
      return produce(state, draft => {
        draft.musicians = action.musicians;
      });
    case actionType.CHANGE_ANCHOR:
      // return state.set('anchors', action.anchors);
      return produce(state, draft => {
        draft.anchors = action.anchors;
      });

    default:
      return state
  }
}

export default reducer;