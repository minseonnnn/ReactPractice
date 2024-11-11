import {useState,Fragment,useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodFind, fetchFoodList} from "../../actions/foodActions";

// cookie / session => 단순하다
//          session.setItem("name",값) , session.clear()
//          => 서버 연동 => id,pwd => id,name,sex ....
//  3000  <===> 80 ==> cookie/session을 서버에 저장 할 수 없다
function FoodFind() {
    // react-query를 이용한 데이터 읽기
    // 읽은 데이터 출력
    const [curpage, setCurpage] = useState(1);
    const [address, setAddress] = useState("마포");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFoodFind(curpage,address));
    },[curpage])
    /*
            map.put("fList", fList);
            map.put("curpage", page);
            map.put("totalpage", totalpage);
            map.put("startPage", startPage);
            map.put("endPage", endPage);

            foods => food_find_list
     */
    const find_list=useSelector((state)=>state.foods.food_find_list.fList);
    const totalpage=useSelector((state)=>state.foods.food_find_list.totalpage);
    const startPage=useSelector((state)=>state.foods.food_find_list.startPage);
    const endPage=useSelector((state)=>state.foods.food_find_list.endPage);


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
    const find=(e)=>{
        setAddress(e.target.value)
    }
    const findBtn=()=>{
        //foodFindData();
        dispatch(fetchFoodFind(curpage,address));
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
                                <h2>맛집 검색</h2>
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
                                <div style={{"height":"10px"}}></div>
                                <input type={"text"} size={"20px"} className={"input-sm"}
                                       onChange={find} value={address}
                                />
                                <button className="btn-sm btn-danger" onClick={findBtn}>검색</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80" id="listApp">
                <div className="container">
                    <div className="row">
                        {
                            find_list && find_list.map((vo) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">

                                        <div className="post-thumb">
                                            <Link to={'/food/detail/' + vo.fno}>
                                                <img src={'http://menupan.com' + vo.poster}
                                                     style={{"width": "350px", "height": "200px"}}/>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{vo.type}</a>
                                                    </div>

                                                    <div className="post-date">
                                                        <a href="#" style={{"color": "orange"}}>{vo.score}</a>


                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {vo.jjimcount}</a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {vo.hit}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to={'/food/detail/' + vo.fno}>
                                                <h4 className="post-headline">{vo.name}</h4>
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

export default FoodFind