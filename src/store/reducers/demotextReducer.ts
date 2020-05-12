import {DEMO_TEXT} from "../action-types";

//初始化状态
let initState: object = {
    demotext: "",
};

export default function componentReducer(state = initState, action: any) {
    switch (action.type) {
        case DEMO_TEXT:
            return Object.assign({}, state, {demotext: action.data});
        default:
            return state;
    }
}
