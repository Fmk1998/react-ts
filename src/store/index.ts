import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import {routerMiddleware} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import {PROJECTEND, PROJECTFIX} from "./action-types"; // 官方写法

//persist配置
const persistConfig = {
    keyPrefix: PROJECTFIX,
    key: PROJECTEND,  //必须有的
    storage,  //缓存机制
    blacklist: ["_persist"], // 黑名单 reducer 里不持久化的数据,除此外均为持久化数据
    whitelist: ["user", "setting","demo"] // 白名单 reducer 里持久化的数据,除此外均为不持久化数据
};

//创建路由的history对象
export const history = createBrowserHistory();

//配置persist到reducer
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
//中间件封装,使用routerMiddleware(history)允许dispatch控制路由
const middleware = applyMiddleware(ReduxThunk, routerMiddleware(history));

//开启reduxDevTools ，创建store
const store = createStore(persistedReducer, composeWithDevTools(middleware));

const persistor = persistStore(store);
export {
    store,
    persistor
};
