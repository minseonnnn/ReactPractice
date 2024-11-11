import {FETCH_MAIN_DATA, FETCH_FOOD_LIST, FETCH_FOOD_DETAIL, FETCH_FOOD_FIND} from "./types";
/*
               dispatch("FETCH_MAIN_DATA")                   dispatch
     사용자(React) =============> action호출 =======> reducer  ======> store
       View => return         서버에서 데이터 읽기        |               |
                | Html을 갱신                       데이터를 변경        저장
                                                 1페이지 = 2페이지       |
                                                 검색어                 |
                                                                   사용자 React
         |                        ============================      ========
       View                                   |                        |
                                           Model                    Controller
 */
import axios from "axios";
// 처리 함수
export const fetchMainData = () => dispatch => {
    axios.get('http://localhost/main').then(response => {
        const action={
            type: FETCH_MAIN_DATA,
            payload: response.data
        }
        dispatch(action) // reducer로 전송 ==> store로 전송 => 데이터를 읽어서 출력
    })
}

export const fetchFoodList = (page) => dispatch => {
    axios.get(`http://localhost/food/list/${page}`)
        .then(response => {
            const action={
                type: FETCH_FOOD_LIST,
                payload: response.data
            }
            dispatch(action)
        })
}
export const fetchFoodDetail = (fno) => dispatch => {
    axios.get(`http://localhost/food/detail/${fno}`)
        .then(response => {
            const action={
                type: FETCH_FOOD_DETAIL,
                payload: response.data
            }
            dispatch(action) // reducer
        })
}
export const fetchFoodFind = (page,address) => dispatch => {
    axios.get(`http://localhost/food/find/${page}/${address}`)
        .then(response => {
            const action={
                type: FETCH_FOOD_FIND,
                payload: response.data
            }
            // reducer로 전송 ==> 자동 처리 ===> store (React에는 store에 있는 데이터 읽기)
            dispatch(action)
        })
}