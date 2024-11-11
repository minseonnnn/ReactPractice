import {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate,Link,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBoardDelete} from "../../actions/boardActions";

function BoardDelete(){
    const {no} = useParams()
    // BoardDetail => 전송된 데이터 받기
    // <Link to={"/board/delete/"+no}>
    const nav= useNavigate(); // history
    const pwdRef = useRef(null);
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();


    const boardDeleteOk=()=>{
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        dispatch(fetchBoardDelete(no,pwd))

    }
    const result=useSelector((state)=>state.boards.result)
    useEffect(()=>{
        if(result && result.msg==='yes')
        {
            window.location.href="/board/list"
        }
        else if(result && result.msg==='no')
        {
            alert("비밀번호가 틀립니다")
            setPwd('')
            pwdRef.current.focus()
        }
    },[result])

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(../img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>삭제하기</h2>
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
                                    <td className={"text-center"}>
                                        비밀번호:<input type={"password"} className={"input-sm"} size={"15"}
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}
                                                    ref={pwdRef}
                                    />
                                        <button className={"btn-sm btn-primary"} onClick={boardDeleteOk}>삭제</button>
                                        <button className={"btn-sm btn-primary"} onClick={() => nav(-1)}>취소</button>
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
export default BoardDelete;