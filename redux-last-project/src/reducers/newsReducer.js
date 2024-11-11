import {FETCH_NEWS_LIST} from "../actions/types";

const newsState = {
    news_list:{}
}

export default function(state=newsState, action){
    switch (action.type) {
        case FETCH_NEWS_LIST:
            return {
                ...state,
                news_list:action.payload
            }

        default:
            return state
    }
}
