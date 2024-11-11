import {
    FETCH_BOARD_LIST,
    FETCH_BOARD_DELETE,
    FETCH_BOARD_UPDATE,
    FETCH_BOARD_DETAIL,
    FETCH_BOARD_UPDATE_OK,
    FETCH_BOARD_INSERT
} from "./types";
import axios from "axios";
/*
              React
                |
     dispatch(fetchBoardList(1))  : 사용자 요청
                |
            boardActions
     export const fetchBoardList = (page) : 서버로부터 값을 읽어 온다
           =>  dispatch(action) : reducer
                                  =======
                                  | state변수 저장
                                        |
                                      store에서 모아서 저장 => 갱신할때 마다
                                        |
                                    React에서 값을 가지고 온다 (store)
                                        |
                                    useSelector()
                * 단방향 통신 => 데이터를 다른 함수로 전송
                                =====================
                                | 매개변수 이용
                                  Aaa(10) => X
                                  <Aaa no="10"> => jsx
                                       ======== props
                * props : 매개변수 => 변경할 수 없다 (상수형 변수)
                  state : 실시간으로 변경되는 변수
                  ================= HTML에 적용
                  ==> store에는 state변수만 저장
          => Redux는 사용할 때 복잡 => 분석이 어렵다
             => 분업화 => 데이터 관리 / 화면 출력
             => 재사용이 좋다
             => 조금 단순한 형태로 변경 : React-Query
                                      =============
             => 데이터 관리시 => VO를 제작 (recoil)
             => react/vue => typescript (문법)  => js / ts
                ============= Front-End
                 => 버전이 변경되면 함수가 사라진다 (버전 호환)
             => spring/spring-boot / mybatis ==> 변경사항이 거의 없다
                ============================ Back-End : 어느정도 학습 (버전 호환)
                Full Stack

            Vue2 -- Vue3 -- Vuex
                              | React와 거의 동일
            React ===> React-Query (데이터 , 서버 관리)
            Redux ===> React의 MVC구조

            => Vue / React ==> 면접
              1) 장단점
              2) 차이점
              3) 공통점 : 가상돔 (가상메모리) => StringBuffer/String
                         ====== 속도의 최적화
            => 잠재력
            => 10% , 20% , 70%
                          -- 포트폴리어
                    -- 기본 지식(기술면접) => 코딩테스트
               -- 인성 = 협업
            코딩테스트
            | 가산점
              백지 (0)
              => 순서도 / 한글로 구현 방법론 / 변수설정 .... 알고리즘
 */
export const fetchBoardList = (page) => dispatch => {
    axios.get(`http://localhost/board/list/${page}`)
        .then(response => {
            const action={
                type: FETCH_BOARD_LIST,
                payload: response.data
            }
            // reducer로 전송 ==> 자동 처리 ===> store (React에는 store에 있는 데이터 읽기)
            dispatch(action)
        })
}
export const fetchBoardInsert=(insertData)=>dispatch => {
    axios({
            method: 'POST',
            baseURL: 'http://localhost',
            url: '/board/insert',
            data: insertData,
            headers:{
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        const action={
            type: FETCH_BOARD_INSERT,
            payload: response.data
        }
        dispatch(action)
    })
}
export const fetchBoardDetail = (no)=>dispatch => {
    axios.get(`http://localhost/board/detail/${no}`)
        .then(response => {
            const action={
                type: FETCH_BOARD_DETAIL,
                payload: response.data
            }
            // reducer로 전송
            dispatch(action)
        })
}
export const fetchBoardDelete=(no,pwd)=>dispatch => {
    axios.delete(`http://localhost/board/delete/${no}/${pwd}`)
        .then(response => {
            const action={
                type: FETCH_BOARD_DELETE,
                payload: response.data
            }
            // reducer로 전송
            dispatch(action)
        })
}