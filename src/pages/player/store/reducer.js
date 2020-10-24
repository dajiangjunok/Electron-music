// import { Map } from 'immutable';
import produce from 'immer';
import * as actionType from './constants';


const initailState = {
  songInfo: [],
  songList: [],
  songIndex: 0,
  currentSong: {},
  lyric: "",
  showPanel: false,
  sequence: 0
}

export default (state = initailState, action) => {
  switch (action.type) {
    case actionType.CHANGE_SONG_INFO:
      // return state.set("songInfo", action.songInfo);
      return produce(state, draft => {
        draft.songInfo = action.songInfo;
      });
    case actionType.CHANGE_SONG_LIST:
      // return state.set("songList", action.songList);
      return produce(state, draft => {
        draft.songList = action.songList;
      });
    case actionType.CHANGE_SONG_INDEX:
      // return state.set("songIndex", action.songIndex);
      return produce(state, draft => {
        draft.songIndex = action.songIndex;
      });
    case actionType.CHANGE_CURRENT_SONG:
      // return state.set("currentSong", action.currentSong);
      return produce(state, draft => {
        draft.currentSong = action.currentSong;
      });
    case actionType.CHANGE_SONG_LYRIC:
      // return state.set("lyric", action.lyric);
      return produce(state, draft => {
        draft.lyric = action.lyric;
      });
    case actionType.SHOW_PANEL:
      // return state.set("showPanel", action.showPanel);
      return produce(state, draft => {
        draft.showPanel = action.showPanel;
      });
    case actionType.CHANGE_SEQUENCE:
      // return state.set("sequence", action.sequence);
      return produce(state, draft => {
        draft.sequence = action.sequence;
      });
    default:
      return state;
  }
}