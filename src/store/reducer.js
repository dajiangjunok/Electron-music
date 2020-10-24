// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as searchReducer } from '../pages/search/store';
import { reducer as loginReducer } from '../components/app-hearder/store';

const rootReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer,
  user: loginReducer
})

export default rootReducer