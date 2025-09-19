import axios from "axios"
import { useEffect, useState } from "react"

export default function Task6({pno}){
    //입력받은 데이터들을 관리하는 useState
    const [mtitle, setMtitle] = useState('');
    const [mdirector, setMdirector] = useState('');
    const [mgenre, setMgenre] = useState('');
    const [mcontent, setMcontent] = useState('');
    const [mpwd , setMpwd] = useState('');
    

    //[1] 등록
    const movieWrite = async() =>{
        const obj = {mtitle, mdirector, mgenre, mcontent, mpwd}
        const response = await axios.post("http://localhost:8080/movie", obj)
        console.log(response.data);
        moviePrint();
    }

    //[2] 목록조회
    const [posts, setPosts] = useState([])
    const moviePrint = async() =>{
        const response = await axios.get("http://localhost:8080/movie")
        setPosts(response.data);
    }
    
    useEffect(()=>{moviePrint();}, []);

    //[3] 개별삭제
    async function movieDelete(deletePno, mpwd){
        const response = await axios.delete("http://localhost:8080/movie",{params: {pno: deletePno, mpwd} });
        if(response.data === true){
            setPosts(posts.filter((post)=>{return post.pno != deletePno ;}))
        }else{alert("비밀번호가 일치하지 않습니다.");}
    }
    
    //삭제시 비밀번호 확인
    function onClickDelete(pno){
        const mpwd = window.prompt("삭제 비밀번호를 입력하세요");
        if(mpwd==null || mpwd.trim() ==="") return; //취소,빈값이면 종료
        movieDelete(pno, mpwd);
    }



    const [rcontent, setRcontent] = useState('');
    const [rpwd, setRpwd] = useState('');
    const [replys, setReplys] = useState([])

     //[4] 댓글작성
    const writeReply = async(targetPno) =>{
        const obj = {pno:targetPno , rcontent, rpwd}
        const response = await axios.post("http://localhost:8080/movie/reply", obj);
        setRcontent('');
        setRpwd('');
        replyPrint(targetPno);
    }

    //[5] 댓글전체조회
    const replyPrint = async(targetPno) =>{
        setOpenPno(targetPno);
        const response = await axios.get("http://localhost:8080/movie/reply", {params: {pno}})
        setReplys(response.data);
    }

    useEffect(()=>{if (pno) replyPrint();}, [pno]); //pno변하면 재조회

    //[6] 댓글개별삭제
    async function replyDelete(deleteRno){
        const response = await axios.delete("http://localhost:8080/movie/reply?rno="+deleteRno);
        const newReplys = replys.filter((reply)=>{return reply.rno !=deleteRno;})
        setReplys([...newReplys]);
        
    }


    return(<>
    <h3>영화 게시판</h3>
    <input value={mtitle} onChange={(e) =>{setMtitle(e.target.value);}} placeholder="제목"></input>
    <input value={mdirector} onChange={(e) =>{setMdirector(e.target.value);}} placeholder="감독"></input>
    <input value={mgenre} onChange={(e)=>{setMgenre(e.target.value);}} placeholder="장르"></input>
    <input value={mcontent} onChange={(e)=>{setMcontent(e.target.value);}} type="text" placeholder="내용"></input>
    <input value={mpwd} onChange={(e)=>{setMpwd(e.target.value);}} type="password" placeholder="비밀번호"></input>
    <button onClick={movieWrite}> 등록 </button>
    {posts.map((p)=>{
        return <div key={p.pno}>
            제목: {p.mtitle} 감독: {p.mdirector} 장르: {p.mgenre} 내용: {p.mcontent} 
            <button onClick={()=> { onClickDelete(p.pno)} }> 삭제 </button>
            <div>
                <textarea value={rcontent} onChange={(e) =>{setRcontent(e.target.value)}}></textarea><br/>
                <input value={rpwd} onChange={(e)=>{setRpwd(e.target.value);}} placeholder="비밀번호" type="password"></input>
                <button onClick={()=>writeReply(p.pno)}>댓글등록</button>
            </div>
            { replys.map((r) =>{
                return <div key={r.rno}>{/* 댓글 조회구역 */}
                {r.rcontent}
                <button>삭제</button>
                </div>})}
            </div>
    })}
        
    </>)
}