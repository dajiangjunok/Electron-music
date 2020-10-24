import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer';

import { persistStore, persistReducer } from 'redux-persist';
// import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  // stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
export default store;