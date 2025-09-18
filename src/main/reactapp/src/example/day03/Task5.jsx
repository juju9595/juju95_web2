import { useEffect, useState } from "react"
import axios from "axios"

export default function Task5( props ){

    //[1] 입력받은 데이터들을 관리하는 useState
    const [ mname , setMname ] = useState('')
    const [ mphone , setMphone ] = useState('')
    const [ mage , setMage ] = useState('')

    const boardWrite = async( ) => {
        const obj = { mname , mphone , mage }
        const response = await axios.post("http://localhost:8080/member", obj)
        console.log(response.data);
        boardPrint();
    }

    const [members, setMembers] = useState([])
    const boardPrint = async() =>{
        const response = await axios.get("http://localhost:8080/member")
        setMembers(response.data);
    } 

    useEffect(()=>{boardPrint()},[])

    async function boardDelete( deleteMno ){
        const response = await axios.delete("http://localhost:8080/member?mno="+deleteMno);
        const newMembers = members.filter( (member)=> { return member.mno != deleteMno ; })
        setMembers( [ ...newMembers ] );
    }

    return (<>

    <h3> 전화번호부 </h3>
    <input value={mname} onChange={(e) =>{setMname(e.target.value);}} placeholder="성명"/>
    <input value={mphone} onChange={(e) =>{setMphone(e.target.value);}} placeholder="연락처 (예: 010-1234-5678)"/>
    <input value={mage} onChange={(e) =>{setMage(e.target.value);}} placeholder="나이"/>
        <button onClick={ boardWrite }> 등록 </button> <br/>
        {   members.map( ( m ) => {
                return <div>
                        성명: { m.mname } 연락처: { m.mphone } 나이:{ m.mage }
                        <button onClick={()=> { boardDelete(m.mno)} }> 삭제 </button>
                    </div>
            })
        }
        총 {members.length}명
    </>)
}
