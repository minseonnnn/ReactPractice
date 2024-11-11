import {FETCH_COMMENT_LIST} from "../actions/types";

const commentState = {
    comment_list:{}
}

export default function(state=commentState, action){
    switch (action.type) {
        case FETCH_COMMENT_LIST:
            return {
                ...state,
                comment_list:action.payload
            }

        default:
            return state
    }
}
