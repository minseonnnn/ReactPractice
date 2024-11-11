import {FETCH_FOOD_DETAIL, FETCH_FOOD_FIND, FETCH_FOOD_LIST, FETCH_MAIN_DATA} from "../actions/types";

const foodState = {
    food_main_list:{}, // map
    food_list: {}, // map
    food_detail:{}, // vo
    food_find_list:{} //map ''
}
/*
      let arr=[1,2,3,4,5]
      => 그대로 복사
         let arr2=[...arr]

      React => 데이터를 가지고 올때
      useSelector((state)=> state.foods.food_main_list)

      Redux => 1. React로 화면 설정
                  return (
                  )
               2. Spring-Boot => 서버  ========> *****
                  데이터베이스 : My-SQL , JPA
                  => 데이터 전송 : @RestController
               3. type 설정
                  구분자 => 상수형 처리  FETCH_MAIN_DATA
                4. type에 대한 함수 제작
                   => 해당 서버 연결 => 데이터 처리
                5. reducer를 만들어서 서버에서 들어오는 데이터 저장
                6. store로 전송 => 자동 store에 저장
                                      ===========
                                      | React에서 다시 읽어온다
          component ======= action함수 호출 ======> 서버연결 / 데이터 읽기
          Home.js                                    |
          Header...                                 reducer
                                                     |
                                                    store
            |                                         |
            ===========================================
          1. 단점 :
               분리 => 역할분담 (여러명 동시에 개발)
               파일이 나눠지기때문에 복잡하다
               => 간단하게 제작할 수 있는 기능 : React-Query
               => 실시간 전송 : 배민 / 쿠팡 ....
                               환율 / 날씨 / 좌석
                               ===> 기상청 , 국민연금 , 은행 , 증권
               => 공기업 / 금융권 / 학교(ASP.NET)
                          = 통계 / 회계 ==> 관리자 페이지
                          = 서울 시청(MS_SQL / C#)
                  ====================
               MVC ==> Spring MVC
               Redux ==> Framework
                         Mobx / SaGa
 */
export default function(state=foodState, action){
    switch (action.type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                food_main_list:action.payload
            }
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail:action.payload
            }
        case FETCH_FOOD_FIND:
            return {
                ...state,
                food_find_list:action.payload
            }
        default:
            return state
    }
}
