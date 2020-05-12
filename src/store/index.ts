import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import rootReducer from "./reducers"; // 官方写法

//中间件封装
const middleware = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer(), composeWithDevTools(middleware));

export {
    store,
};
