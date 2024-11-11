import {FETCH_SEOUL_DETAIL,FETCH_SEOUL_LIST} from "./types";
import axios from "axios";
/*
    함수명
    URL
    type
 */
export const fetchSeoulList = (page) => dispatch => {
    axios.get(`http://localhost/seoul/list/${page}`)
        .then(response => {
            const action={
                type: FETCH_SEOUL_LIST,
                payload: response.data
            }
            dispatch(action) // reducer => store
        })
}