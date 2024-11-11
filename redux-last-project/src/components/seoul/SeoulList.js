import {useState,useEffect,Fragment} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchSeoulList} from "../../actions/seoulActions";

function SeoulList() {
    // react-query를 이용한 데이터 읽기
    // 읽은 데이터 출력
    const [curpage, setCurpage] = useState(1);
    // action연결
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSeoulList(curpage)); // action => reducer => store
    }, [curpage]);

    // 출력에 필요한 데이터를 store로부터 가지고 온다
    /*
            map.put("sList", list);
		   map.put("curpage", page);
		   map.put("totalpage", totalpage);
		   map.put("startPage", startPage);
		   map.put("endPage", endPage);
		   map = seouls.seoul_list
     */
    const seoul_list=useSelector((state)=>state.seouls.seoul_list.sList);
    const totalpage=useSelector((state)=>state.seouls.seoul_list.totalpage);
    const startPage=useSelector((state)=>state.seouls.seoul_list.startPage);
    const endPage=useSelector((state)=>state.seouls.seoul_list.endPage);
    //console.log(food_list);
    //console.log(totalpage);
    //console.log(startPage);
    //console.log(endPage);
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prev=()=>{
        setCurpage(startPage-1)
        // 1 , 11 , 21 => 10 , 20
    }
    const next=()=>{
        setCurpage(endPage+1)
        // 10 20 30 40 ==> 11 21 31 41...
    }
    let pageArr=[]
    for (let i = startPage; i <= endPage; i++) {
        if (curpage === i) {
            pageArr.push(
                <li className="page-item active">
                    <button className="page-link" onClick={() => pageChange(i)}>{i}</button>
                </li>
            )
        } else {
            pageArr.push(
                <li className="page-item">
                    <button className="page-link" onClick={() => pageChange(i)}>{i}</button>
                </li>
            )
        }

    }

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(../img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>서울 여행</h2>
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
                                    <li className="breadcrumb-item"></li>
                                    <li className="breadcrumb-item active" aria-current="page"></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80" id="listApp">
                <div className="container">
                    <div className="row">
                        {
                            seoul_list && seoul_list.map((vo) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">

                                        <div className="post-thumb">
                                            <Link to={'/seoul/detail/' + vo.no}>
                                                <img src={vo.poster}
                                                     style={{"width": "350px", "height": "200px"}}/>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">

                                                    </div>

                                                    <div className="post-date">

                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/seoul/detail/' + vo.no}>
                                                <h4 className="post-headline">{vo.title}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}


                        <div className="col-12">
                            <div className="pagination-area d-sm-flex mt-15">
                                <nav aria-label="#">
                                    <ul className="pagination">
                                        {
                                            startPage && startPage > 1 &&
                                            <li className="page-item">
                                                <button className="page-link" onClick={prev}><i
                                                    className="fa fa-angle-double-left" aria-hidden="true"></i> 이전
                                                </button>
                                            </li>
                                        }
                                        {pageArr}
                                        {
                                            endPage && endPage < totalpage &&
                                            <li className="page-item">
                                                <button className="page-link" onClick={next}>다음 <i
                                                    className="fa fa-angle-double-right" aria-hidden="true"></i>
                                                </button>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                                <div className="page-status">
                                    <p>{curpage} page / {totalpage} pages</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default SeoulList