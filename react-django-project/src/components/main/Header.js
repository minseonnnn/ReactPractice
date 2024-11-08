import {NavLink} from "react-router-dom";
function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Django</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/food/find"}>맛집 검색</NavLink></li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">맛집 예약</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header