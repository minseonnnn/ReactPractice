import
{
    FETCH_BOARD_LIST,
    FETCH_BOARD_DETAIL,
    FETCH_BOARD_DELETE,
    FETCH_BOARD_UPDATE_OK,
    FETCH_BOARD_INSERT,
    FETCH_BOARD_UPDATE} from "../actions/types";
// [] => List
// {} => 객체 => VO , Map
// 프로그램은 => 재사용
// 객체지향 프로그램 => 재사용
const boardState={
    board_list:{},
    board_detail:{},
    board_update:{},
    result:{}
}
// dispatch(action) => action = type(상수) , payload(실제 서버데이터)
export default function(state=boardState, action){
    switch (action.type) {
        case FETCH_BOARD_LIST: // 목록 요청 => 사용자 요청 구분
            console.log(action.payload);
            return {
                ...state,
                board_list:action.payload
            }
        case FETCH_BOARD_INSERT:
            return {
                ...state,
                result:action.payload
            }
        case FETCH_BOARD_DETAIL:
            return {
                ...state,
                board_detail: action.payload
            }
        case FETCH_BOARD_DELETE:
            return {
                ...state,
                result:action.payload
            }
        default:
            return state;
    }
}