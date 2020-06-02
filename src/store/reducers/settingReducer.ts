import {SETTING} from "../action-types";

//初始化状态
let initState: object = {
    language: "zh"
};

export default function componentReducer(state = initState, action: any) {
    switch (action.type) {
        case SETTING:
            return Object.assign({}, state, {language: action.payload});
        default:
            return state;
    }
}
