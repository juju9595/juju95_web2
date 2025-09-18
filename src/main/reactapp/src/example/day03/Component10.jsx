import { useEffect, useState } from "react";
import axios from "axios";// <---------------------axios import
// ========== 스프링 서버내 day07(boardservice13) ===========
export default function Component10(props){

    //[1] 입력받은 데이터들을 관리하는 useState
    const [bcontent, setBcontent] = useState('');
    const [bwriter, setBwriter] = useState('');
  
    //[2] axios 이용하여 스프링 서버에게 등록 요청
    const boardWrite = async() =>{
        const obj = {bcontent , bwriter}//2-1 : 입력받은 데이터들을 객체화
        const response = await axios.post("http://localhost:8080/board", obj)//2-2: axios 요청
        console.log(response.data);        
        boardPrint();//2-3 :
    }

    // [3]출력할 데이터들을 관리하는 useState
    const [boards, setBoards] = useState([{bno : 1, bcontent : 'test', bwriter : 'test'}]);
    //[4] 출력할 데이터들을 axios 이용하여 스프링에게 요청 , [2-3[] 실행 , [5] 실행
    const boardPrint = async() =>{
        const response = await axios.get("http://localhost:8080/board");//4-1: axios 요청
        setBoards(response.data);//4-2 : axios 요청값을 setState 이용한 재랜더링
        
    }

    //[5]useEffect 이용한 최초 컴포넌트 실행시 출력함수 실행
    useEffect(()=>{boardPrint()}, []) // 의존성배열이 비어있는경우 ****1번만**** 실행

    //[6]삭제함수 정의/만들기 하는 방법 3가지
    //1. function boardDelete(){}
    //2. function(){}
    //3. ()=>{}
    //function boardDelete(){console.log()}
    async function boardDelete(deleteBno){
        //6-1 : axios 이용하여 삭제할번호를 스프링 서버에게 보내서 요청한다.
        const response = await axios.delete("http://localhost:8080/board?bno="+deleteBno);
        //
        //6-1 : 삭제할 bno를 매개변수로 받아서 반복문 이용하여 삭제할 bno를 제외한 새로운 리스트 생성
        //**6-2** : 
        const newBoards = boards.filter((board) =>{return board.bno != deleteBno})
        //----------------------------------
        // const newBoards2 = []                   // 새로운 배열 선언
        // for(let i = 0; i<boards.length; i++){   // 기존 배열내 0번부터 마지막인덱스까지 순회
        //     if(boards[i].bno != deleteBno){     // 만약에 i번째 bno가 삭제할bno 와 같지 않으면
        //         newBoards2.push(boards[i]);     // 새로운 배열에 저장한다.
        //     }
        // }
        //6-2 : 재렌더링
        setBoards([...newBoards]);
    }

    return(<>
        <h3> 스프링 서버의 boardservice13(day07) 통신</h3>
        <input value={bcontent} onChange={(e) =>{ setBcontent(e.target.value)}}/>
        <input value={bwriter} onChange={(e) =>{ setBwriter(e.target.value)}}/>
        <button onClick={boardWrite}>등록</button>

        {boards.map((board) =>{
            return <div>
                {board.bno} {board.bcontent} {board.bwriter}
                <button onClick={()=>{boardDelete(board.bno)}}>삭제</button>
            </div>
        })}
    </>)
}