import {Fragment,useState,useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBoardDetail, fetchBoardList} from "../../actions/boardActions";

function BoardDetail(){
    const {no} = useParams()
    const dispatch = useDispatch();
    // 연결
    useEffect(() => {
        dispatch(fetchBoardDetail(no))
    }, []);
    const detail=useSelector((state)=>state.boards.board_detail);
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(../img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>상세보기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80" id="listApp">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            {/*화면 출력*/}
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <th style={{"width": "20%"}} className={"text-center"}>번호</th>
                                    <td style={{"width": "30%"}} className={"text-center"}>{detail && detail.no}</td>
                                    <th style={{"width": "20%"}} className={"text-center"}>작성일</th>
                                    <td style={{"width": "30%"}} className={"text-center"}>{detail && detail.regdate}</td>
                                </tr>
                                <tr>
                                    <th style={{"width": "20%"}} className={"text-center"}>이름</th>
                                    <td style={{"width": "30%"}} className={"text-center"}>{detail && detail.name}</td>
                                    <th style={{"width": "20%"}} className={"text-center"}>조회수</th>
                                    <td style={{"width": "30%"}} className={"text-center"}>{detail && detail.hit}</td>
                                </tr>
                                <tr>
                                    <th style={{"width": "20%"}} className={"text-center"}>제목</th>
                                    <td style={{"width": "30%"}} colSpan={"3"}>{detail && detail.subject}</td>
                                </tr>
                                <tr>
                                    <td colSpan={"4"} className={"text-left"} valign={"top"} height={"200"}>
                                        <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{detail && detail.content}</pre>
                                    </td>
                                </tr>
                                <tr>
                                    <td  colSpan={"4"} className={"text-right"}>
                                        <Link to={"/board/update/"+no} className={"btn btn-xs btn-primary"}>수정</Link>
                                        <Link to={"/board/delete/"+no} className={"btn btn-xs btn-danger"}>삭제</Link>
                                        <Link to={"/board/list"} className={"btn btn-xs btn-success"}>목록</Link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default BoardDetail;