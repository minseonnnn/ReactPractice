import {Fragment, useState, useRef, useEffect} from "react";
import {fetchNewsList} from "../../actions/newsActions";
import {useDispatch,useSelector} from "react-redux";
import {fetchFoodList} from "../../actions/foodActions";

function NewsList(){
    const [fd,setFd] = useState("맛집");
    const fdRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNewsList(fd));
    },[])
    const findOk=()=>{
        dispatch(fetchNewsList(fd));
    }
    const news_list=useSelector((state)=>state.news.news_list.list);
    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(../img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>뉴스 검색</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div style={{"height":"20px"}}></div>
                            <input type={"text"} size={"20px"} className={"input-sm"} ref={fdRef}
                                   onChange={(e)=>setFd(e.target.value)}
                                   value={fd}
                            />&nbsp;
                            <button className={"btn-sm btn-danger"} onClick={findOk}>검색</button>
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
                                        {
                                            news_list && news_list.map((news)=>
                                                <table className={"table"}>
                                                    <tbody>
                                                    <tr>
                                                        <td><b style={{"color":"orange"}}
                                                               dangerouslySetInnerHTML={{__html: news.title}}></b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td dangerouslySetInnerHTML={{__html:news.desc}}></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        }
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
export default NewsList