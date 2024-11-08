import {Link} from "react-router-dom";
import {useParams,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
// useEffect : 서버 연결 , 일반 자바 스크립트
// useState : 함수 안에서 멤버변수 역할
function FoodDetail(){
    const {fno} = useParams() // getParameter
    const nav=useNavigate() // history.back()
    const [detail,setDetail]=useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:8000/web/food/detail",{
            params:{
                fno:fno
            }
        }).then(response=>{
            console.log(response.data)
            setDetail(response.data)
        }).catch(error=>{
            console.log(error.response)
        })
    }) // mounted() 
    
    return (
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td width={"30%"} className={"text-center"} rowSpan={"5"}>
                            <img src={"http://menupan.com"+detail.poster} style={{"width": "100%"}}/>
                        </td>
                        <td colSpan={"2"}>
                            <h3>{detail.name}&nbsp;<span style={{"color": "orange"}}>{detail.score}</span></h3>
                        </td>
                    </tr>
                    <tr>
                        <td width={"20%"}>음식종류</td>
                        <td width={"50%"}>{detail.type}</td>
                    </tr>
                    <tr>
                        <td width={"20%"}>주소</td>
                        <td width={"50%"}>{detail.address}</td>
                    </tr>
                    <tr>
                        <td width={"20%"}>전화</td>
                        <td width={"50%"}>{detail.phone}</td>
                    </tr>
                    <tr>
                        <td width={"20%"}>영업시간</td>
                        <td width={"50%"}>{detail.time}</td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-right"}>
                        <button className={"btn-sm btn-danger"}
                                    onClick={()=>nav(-1)}
                                    >목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default FoodDetail