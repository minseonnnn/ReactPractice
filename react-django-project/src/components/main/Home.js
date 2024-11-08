import {useState,useEffect} from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
//import Pagination from "react-js-pagination/src/components/Pagination";

function Home() {
    // Vue => data(){}
    // 변수 선언 => 프로그램 종료시까지 유지 => state
    /*
          React
            props : 불변 => 변경할 수 없는 변수
            state : 데이터 변경시마다 => 화면을 변경
            ===== 데이터 수정시 화면에 데이터만 변경
            전역변수 / 멤버변수 => 함수형으로 변경 => useState
            => 변수 선언 => 반드시 setXxx
                                ======= 호출 자동으로 useEffect 호출
                                ==> 밑에 있는 문장 수행
                                ==> 결과값 (return에 있는 값) => index.html
            HTML => XML 형식으로 제작 => 파싱해서 HTML로 전송
            ======================= JSX (JavaScript+XML)
            react : 페이스북
                    => 검색 : 재사용
                    => 1. 속도 => 전체 사이트
                    => 2. 클래스 => function => Hooks
                    => 3. 요구사항
                          => Redux : MVC
                             =====
                          => 간단한 프로그램 : React-Query
                                            ============
                    => 4. 가상메모리
                    => 5. 어렵다 (Vue,Jquery)
     */
    const [foodList, setFoodList] = useState([])
    const [curpage, setCurpage] = useState(1)
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(0)
    const [totalpage, setTotalpage] = useState(0)
    const [count, setCount] = useState(0)
    // Vue => mounted()
    useEffect(() => {
        axios.get("http://localhost:8000/web/",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data.food_list)
            setCount(response.data.count)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    }, [curpage]);
    const html=foodList.map((food)=>
        <div className="col-md-3">
            <Link to={"/food/detail/"+food.fno}>
                <div className="thumbnail">

                    <img src={"http://menupan.com"+food.poster} style={{"width":"100%"}}/>
                        <div className="caption">
                            <p className={"a"}>{food.name}</p>
                        </div>

                </div>
            </Link>
        </div>
    )
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prev=()=>{
        setCurpage(startPage-1)
    }
    const next=()=>{
        setCurpage(endPage+1)
    }
    let row=[]
    if(startPage>1)
    {
        row.push(<li><a href={"#"} onclick={prev}>&laquo;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i==curpage)
        {
            row.push(<li className={"active"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={next}>&raquo;</a></li>)
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                {html}
            </div>
            <div style={{"height":"10px"}}></div>
            <div className={"row"}>
                <div className={"text-center"}>
                  <ul className={"pagination"}>
                      {row}
                  </ul>
                </div>
            </div>
        </div>
    )
}
export default Home