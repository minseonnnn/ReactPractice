import {Fragment, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Map,MapMarker} from "react-kakao-maps-sdk";
import {fetchFoodDetail} from "../../actions/foodActions";
import {fetchCommentList} from "../../actions/commentActions";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
/* global kakao */
/*
     호출 
      dispatch(action함수 호출(매개변수))
        | 
        서버연결 => 데이터를 가지고 온다 
        |
        ==> dispatch(action)
            |
           reducer로 전송 
            | state 저장후 => store
       React ====> action ===== reducer === store
                            | state는 React Component 모든곳에서 사용 
       => 분업이 가능 
       => 단방향 통신의 단점을 보완 
       => 데이터 관리가 쉽다 
                            
 */
const MapLocation=(props)=>{
    const [state,setState] = useState({
        // 위도 / 경도
        center:{lat:null,lng:null},
        isShow:true // 지도를 이동할때 부드럽게 출력
    })
    useEffect(() => {
        // 일반 주소를 위도.경도를 출력
        const geocoder = new kakao.maps.services.Geocoder();
        // 주소 입력 => 좌표 변환
        let callback=function(result,status){
            if(status==kakao.maps.services.Status.OK){
                // 변환이 가능한 주소가 들어 온 경우
                const newSearch=result[0];
                setState({
                    center:{lat:newSearch.y,lng:newSearch.x}
                })
            }
        }
        geocoder.addressSearch(`${props.address}`,callback)
        // 주소를 위도/경도를 찾아주는 역할
    }, []);
    return (
        <div>
            <Map center={state.center}
                 isPanto={state.isShow}
                 style={{
                     width:"600px",
                     height:"500px",
                     borderRadius:'20px'
                 }}
            >
                <MapMarker position={state.center}
                           style={{border:'transparent'}}
                >
                    <div
                        style={{
                            color:'gray',
                            fontSize:'19px',
                            fontWeight:'700',
                            border:'4px solid gray',
                            borderRadius:'10px',
                            padding:'2px'
                        }}
                    >
                        {props.name}
                    </div>
                </MapMarker>
            </Map>
        </div>
    )
}
function FoodDetail(){

    const {fno}=useParams() // request.getParameter()
    const nav=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchFoodDetail(fno))
        //dispatch(fetchCommentList(fno))
    },[])
    const food_detail=useSelector((state)=>state.foods.food_detail)
    const comment_list=useSelector((state)=>state.comments.comment_list)
    return (

        <Fragment>

            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>맛집 상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </div>
            <section className="single_blog_area section_padding_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row no-gutters">

                                <div className="col-12 col-sm-12">

                                    <div className="related-post-area section_padding_50">

                                        <div className="related-post-slider owl-carousel">

                                            {/*<c:forTokens items="${vo.images }" delims="^" var="img">
                                                <div className="single-post">

                                                    <div className="post-thumb">
                                                        <img src="http://www.menupan.com${img }" alt="">
                                                    </div>
                                                </div>
                                            </c:forTokens>*/}
                                        </div>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td width="30%" className="text-center" rowSpan="6">
                                                <img src={food_detail && "http://www.menupan.com" + food_detail.poster}
                                                     style={{"width": "100%"}}/>
                                            </td>
                                            <td colSpan="2">
                                                <h3>{food_detail.name}&nbsp;<span
                                                    style={{"color": "orange"}}>{food_detail.score}</span></h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="15%" className="text-center">주소</td>
                                            <td width="55%">{food_detail.address}</td>
                                        </tr>
                                        <tr>
                                            <td width="15%" className="text-center">전화</td>
                                            <td width="55%">{food_detail.phone}</td>
                                        </tr>
                                        <tr>
                                            <td width="15%" className="text-center">음식종류</td>
                                            <td width="55%">{food_detail.type}</td>
                                        </tr>
                                        <tr>
                                            <td width="15%" className="text-center">주차</td>
                                            <td width="55%">{food_detail.parking}</td>
                                        </tr>
                                        <tr>
                                            <td width="15%" className="text-center">영업시간</td>
                                            <td width="55%">{food_detail.time}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td>{food_detail.theme}</td>
                                        </tr>
                                        <tr>
                                            <td>{food_detail.content}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right">
                                                <Link to="/food/list" className="btn btn-xs btn-warning">목록</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    {/* 함수의 매개변수 전송 : props = child
                                                        react의 단점 => 단방향
                                                    */}
                                                    <MapLocation address={food_detail.address} name={food_detail.name}/>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="comment_area section_padding_50 clearfix">
                                        <h4 className="mb-30">댓글 ({comment_list.count})</h4>

                                        <ol>
                                            {/*
                                                comment_list && comment_list.list.map((comment) =>
                                            <li className="single_comment_area">
                                                <div className="comment-wrapper d-flex">

                                                    <div className="comment-author">
                                                        <img src="../img/man.png" alt=""/>
                                                    </div>

                                                    <div className="comment-content">
                                                        <span className="comment-date text-muted">{comment.regdate}</span>
                                                        <h5>{comment.name}</h5>
                                                        <p>{comment.msg}</p>
                                                        <a className="active" href="#">수정</a>
                                                        <a href="#">삭제</a>
                                                    </div>
                                                </div>

                                            </li>
                                                )*/}
                                        </ol>
                                    </div>


                                    <div className="leave-comment-area section_padding_50 clearfix">
                                        <div className="comment-form">
                                            <h4 className="mb-30">Leave A Comment</h4>


                                            <form action="#" method="post">

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default FoodDetail;
