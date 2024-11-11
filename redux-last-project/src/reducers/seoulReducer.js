import {FETCH_SEOUL_DETAIL, FETCH_SEOUL_LIST} from "../actions/types";

const seoulState = {
    seoul_list:{}
}

export default function(state=seoulState, action){
    switch (action.type) {
        case FETCH_SEOUL_LIST:
            return {
                ...state,
                seoul_list:action.payload
            }

        default:
            return state
    }
}
