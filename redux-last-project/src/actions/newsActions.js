import {FETCH_NEWS_LIST} from "./types";
import axios  from "axios";

export const fetchNewsList = (fd) => dispatch => {
    axios.get(`http://localhost/news/list/${fd}`)
        .then(response => {
            const action={
                type: FETCH_NEWS_LIST,
                payload: response.data
            }
            // reducer로 전송 ==> 자동 처리 ===> store (React에는 store에 있는 데이터 읽기)
            dispatch(action)
        })
}