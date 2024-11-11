/*
      데이터 관리 : Redux
      ===== 상태 (state)

      React   ===== React-Query ===== Redux
      JSP            JSTL/EL          MVC
      ============================= 웹 MVC
          request(요청)         request(처리)
      user ==== Controller ===== Model <====> DAO
                   |              |
                   ----------------
                   | 처리된 결과값 JSP로 전송
                 View (JSP)
                   |
                 user브라우저

       Controller  ===>  Model  =====> View
                         Model  =====> View
                         ===== 메소드
       요청
        | 서버와 연결 == 데이터 읽기
                         | 저장 공간에 전송      저장 공간
      Action(axios) ============ Reducer =======> store =====> View(component)
                      dispatch     |       dispatch  |
                             여러개 사용이 가능      한개만 사용이 가능
                             foodReducer
                             boardReducer
                                |
                              MVC => 실무
 */
import { Fragment,useState,useRef } from "react"
import {Link} from "react-router-dom"

/*
   로그인 => React / SpringBoot => port가 틀리다 매칭이 안된다 (서버에 session,cookie 저장이 안된다)
            1. React => 서버로 전송 (id,pwd)
            2. 서버에 존재여부 확인
               => session에 저장할 데이터를 가지고 온다
               => localStorage에 저장 (자바스크립트 세션)
               => sessionStorage => setItem("key","value")
               => clear()
 */
function Header(){

    return (
        <Fragment>
            <div className="top_header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6">

                            <div className="top_social_bar">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            </div>
                        </div>

                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header_area">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="logo_area text-center">
                                <Link to={"/"} className="yummy-logo">Redux</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false"
                                        aria-label="Toggle navigation"><i className="fa fa-bars"
                                                                          aria-hidden="true"></i> Menu
                                </button>

                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                    <ul className="navbar-nav" id="yummy-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={"/"}>Home <span
                                                className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">맛집</a>
                                            <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                                <Link className="dropdown-item" to={"/food/list"}>맛집 목록</Link>
                                                <Link className="dropdown-item" to={"/food/find"}>맛집 검색</Link>
                                                <Link className="dropdown-item" to={"/food/recommand"}>맛집 추천</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">서울여행</a>
                                            <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                                <a className="dropdown-item" href={"/seoul/location"}>명소</a>
                                                <a className="dropdown-item" href={"/seoul/nature"}>자연</a>
                                                <a className="dropdown-item" href={"/seoul/shop"}>쇼핑</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={"/board/list"}>스토어</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/board/list"}>커뮤니티</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href={"/news/list"}>뉴스검색</a>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>

    )
}

export default Header