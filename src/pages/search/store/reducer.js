import * as actionType from './contants';
// import { Map } from 'immutable';
import produce from 'immer';

const initialSearchState = {
  searchInfo: {}
}

export default (state = initialSearchState, action) => {
  switch (action.type) {
    case actionType.CHANGE_SEARCH_INFO:
      // return state.set('searchInfo', action.searchInfo);
      return produce(state, draft => {
        draft.searchInfo = action.searchInfo;
      });

    default:
      return state;
  }
}

