import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import setting from "./settingReducer";
import demo from "./demotextReducer";

//使用combineReducers将多个reducer变为一个
const createRootReducer = (history: any) => combineReducers({
    // 添加路由reducer通过传递history给connectRouter
    router: connectRouter(history),
    demo,
    setting
});

export default createRootReducer
