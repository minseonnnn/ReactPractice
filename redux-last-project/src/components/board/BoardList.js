import {Fragment,useState,useEffect} from "react";
import {fetchBoardList} from "../../actions/boardActions";
// store에서 데이터를 가지고 온다
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function BoardList() {
    const dispatch = useDispatch(); // => action연결
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        dispatch(fetchBoardList(curpage)); // reducer=>store에 저장
    },[curpage]); // curpage변경될때 재호출 한다
    /*
        상태관리 프로그램,상태 변화 프로그램 => 데이터
        === state
     */
    // store에서 값을 읽기
    const board_list=useSelector((state)=>state.boards.board_list.bList)
    //console.log(board_list && board_list);
    const totalpage=useSelector((state)=>state.boards.board_list.totalpage)
    const today=useSelector((state)=>state.boards.board_list.today)
    const prev=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
        // => useEffect를 재호출
    }
    const next=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
    }
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(../img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>자유 게시판</h2>
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
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <td>
                                        <Link to={"/board/insert"} className={"btn btn-sm btn-primary"}>새글</Link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className={"table table-striped"}>
                                <thead>
                                <tr>
                                    <th className={"text-center"} width={"10%"}>번호</th>
                                    <th className={"text-center"} width={"45%"}>제목</th>
                                    <th className={"text-center"} width={"15%"}>이름</th>
                                    <th className={"text-center"} width={"20%"}>작성일</th>
                                    <th className={"text-center"} width={"10%"}>조회수</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* 게시물 출력 위치*/}
                                {
                                    board_list && board_list.map((vo)=>
                                        <tr>
                                            <td className={"text-center"} width={"10%"}>{vo.no}</td>
                                            <td width={"45%"}>
                                                <Link to={"/board/detail/"+vo.no}>{vo.subject}</Link>&nbsp;
                                                {
                                                    today && today===vo.regdate &&
                                                    <sup><img src={"../../img/new.gif"}/></sup>
                                                }
                                            </td>
                                            <td className={"text-center"} width={"15%"}>{vo.name}</td>
                                            <td className={"text-center"} width={"20%"}>{vo.regdate}</td>
                                            <td className={"text-center"} width={"10%"}>{vo.hit}</td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td colSpan={5} className={"text-center"}>
                                        <button className={"btn btn-sm btn-primary"} onClick={prev}>이전</button>
                                        {curpage} page / {totalpage} pages
                                        <button className={"btn btn-sm btn-primary"} onClick={next}>다음</button>
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
export default BoardList;