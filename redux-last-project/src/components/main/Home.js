import {Fragment,useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {fetchMainData} from "../../actions/foodActions";
import {useDispatch,useSelector} from "react-redux";
function Home(){
    // Action연결
    const dispatch = useDispatch();
    useEffect(()=>{
        // action연결
        dispatch(fetchMainData());
    },[])
    const oneData=useSelector((state)=>state.foods.food_main_list.oneData)
    const twoData=useSelector((state)=>state.foods.food_main_list.twoData)
    const threeData=useSelector((state)=>state.foods.food_main_list.threeData)

    return (
        <Fragment>
            <section className="categories_area clearfix" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src="/img/catagory-img/1.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>맛집</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="/img/catagory-img/2.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>레시피</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="/img/catagory-img/3.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>스토어</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog_area section_padding_0_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">

                                <div className="col-12">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".2s">

                                        <div className="post-thumb">
                                            <img src={oneData && 'http://www.menupan.com' + oneData.poster}
                                                 style={{"width": "800px", "height": "330px"}}/>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{oneData && oneData.type}</a>
                                                    </div>

                                                    <div className="post-date">
                                                        <a href="#"><span
                                                            style={{"color": "orange"}}>{oneData && oneData.score}</span></a>
                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {oneData && oneData.jjimcount}</a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {oneData && oneData.hit}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h2 className="post-headline">{oneData && oneData.name}</h2>
                                            </a>
                                            <p>{oneData && oneData.content}</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>
                                {/*html1*/
                                    twoData && twoData.map((food) =>
                                        <div className="col-12 col-md-6">
                                            <div className="single-post wow fadeInUp" data-wow-delay=".6s">

                                                <div className="post-thumb">
                                                    <img src={'http://menupan.com' + food.poster}
                                                         style={{"width": '350px', "height": '200px'}}/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <a href="#">{food.type}</a>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#"><span
                                                                    style={{"color": "orange"}}>{food.score}</span></a>
                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i> {food.jjimcount}</a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {food.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{food.name}</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    threeData && threeData.map((food) =>
                                        <div className="col-12">
                                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig"
                                                 data-wow-delay=".2s">

                                                <div className="post-thumb">
                                                    <img src={'http://menupan.com' + food.poster}
                                                         style={{"width": "350px", "height": "220px"}}/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <a href="#">{food.type}</a>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#">
                                                                    <span style={{"color": "orange"}}>{food.score}</span>
                                                                </a>

                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i> {food.jjimcount}</a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {food.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{food.name}</h4>
                                                    </a>
                                                    <p>{food.theme}</p>
                                                    <a href="#" className="read-more">Continue Reading..</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>


                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="blog-sidebar mt-5 mt-lg-0">

                                <div className="single-widget-area about-me-widget text-center">
                                    <div className="widget-title">
                                        <h6>오늘의 쉐프</h6>
                                    </div>
                                    <div className="about-me-widget-thumb">
                                        {/*<img src={chefData.poster} alt=""/>*/}
                                    </div>
                                    <h4 className="font-shadow-into-light">{/*chefData.chef*/}</h4>

                                </div>

                                <div className="single-widget-area popular-post-widget">
                                    <div className="widget-title text-center">
                                        <h6>인기 레시피</h6>
                                    </div>
                                    {/*rList && rList.map((recipe) =>
                                        <div className="single-populer-post d-flex">
                                            <img src={recipe.poster} style={{"width": "180px", "height": "150px"}}
                                                 alt=""/>
                                            <div className="post-content">
                                                <a href="#">
                                                    <h6>{recipe.title}</h6>
                                                </a>
                                                <p>{recipe.chef}</p>
                                            </div>
                                        </div>
                                    )*/}
                                </div>


                                <div className="single-widget-area add-widget text-center">
                                    <div className="add-widget-area">
                                        <img src="/img/sidebar-img/6.jpg" alt=""/>
                                        <div className="add-text">
                                            <div className="yummy-table">
                                                <div className="yummy-table-cell">
                                                    <iframe
                                                        src={"http://youtube.com/embed/XC3kex1KhdA\u0026pp=YAHIAQHwAQG6AwIYAugFAaIGFQFr6YMI8tboe7cieVDK1aUTMsX9ipAHAg%3D%3D"}></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="single-widget-area newsletter-widget">
                                    <div className="widget-title text-center">
                                        <h6>최근 방문 맛집</h6>
                                    </div>
                                    {/* 쿠키 출력 위치 */}
                                    {/*
                                        images && images.map((poster, index) =>
                                            <Link to={"/food/detail/" + keys[index].replace("food_", "")}>
                                                <img src={'http://menupan.com' + poster}
                                                     style={{"width": "250px", "height": "130px", "marginTop": "8px"}}
                                                     alt=""/>
                                            </Link>
                                        )
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;
