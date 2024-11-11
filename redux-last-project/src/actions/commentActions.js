import {FETCH_COMMENT_LIST, FETCH_FOOD_FIND} from "./types";
import axios from "axios";

export const fetchCommentList = (fno) => dispatch => {
    axios.get(`http://localhost/comment/list/${fno}`)
        .then(response => {
            const action={
                type: FETCH_COMMENT_LIST,
                payload: response.data
            }
            // reducer로 전송 ==> 자동 처리 ===> store (React에는 store에 있는 데이터 읽기)
            dispatch(action)
        })
}