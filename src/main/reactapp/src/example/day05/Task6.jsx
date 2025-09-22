import { BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
//[1] CSS 가져오기
import './Task6.css';
import { use, useReducer, useRef } from "react";

//[1] 홈 컴포넌트
function Home(props){
    return(<>   
        <div>
            <h3>홈 페이지 </h3>
            좌측 메뉴에서 회원가입 또는 로그인으로 이동해보세요.
        </div></>)
}

//[2] 회원가입 컴포넌트
function Signup(props){
    //입력상자들을 참조하는 useRef
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    // 라우터 전용 페이지 전환 함수
    const navigate = useNavigate();
    // 특정한 이벤트에서 참조중인 useRef current 확인하기
    const 회원가입 = () =>{
        console.log(idRef.current.value);
        // idRef.current (vs) document.querySelector()
        // idRef.courrent.value (vs) document.querySelector().value
        const id = idRef.current.value; // idRef : 참고객체, idRef.current : 참고객체가 참조중인 값
        const pwd = pwdRef.current.value;
        const obj = {id, pwd};
        //* axios 를 이용한 서버(스프링) 통신 했다 치고 가정하고, *
        alert('[회원가입 성공]');
        //location.href = "/login"// 라우터 방식이 아닌 고전적인 HTML 방식으로 새로고침한다.
        navigate('/login'); //f라우터 방식
    }
    return(<>
        <h3>회원가입 페이지</h3>
        <input ref={idRef}name="idData" type="text" placeholder="아이디"></input><br/>
        <input ref={pwdRef} name="pwdData" type="password" placeholder="비밀번호"></input><br/>
        <button onClick={회원가입}> 회원가입 </button>
    </>)
    
}

//[3] 로그인 컴포넌트
function Login(props){
    // 입력받은 정보들을 갖는 form 전체를 참조하는 useRef
    const formRef = useRef(null);
    //라우터 페이지 전환
    const navigate = useNavigate();
    // 특정한 이벤트/함수에서 참조중인 useRef current 확인하기
    const 로그인 = async() =>{
        console.log(formRef.current);
        const id = formRef.current.elements['id'].value;
        const pwd = formRef.current.elements['pwd'].value;
        //axios 했다 가정하고 
        if(id=="admin" && pwd =="1234") {
            alert('[로그인 성공]'); navigate('/'); }
    }
    return(<>
            <h3>로그인 페이지</h3>
            <form ref={formRef}>
            <input name="id" placeholder="아이디"></input><br/>
            <input name="pwd" placeholder="비밀번호"></input><br/>
            <button onClick={로그인} type="button"> 로그인 </button>
            </form>
        </>)
}
//[2] 라우터로 사용할 최초 컴포넌트
export default function Task6(props){
    return(<>
    <BrowserRouter>
    <div class="container">
        <ul>
            <Link to ="/"><li> 홈 </li></Link>
            <Link to="/signup"><li> 회원가입 </li></Link>
            <Link to="/login"><li> 로그인 </li></Link>
        </ul>
        <div> { /* 여기가 렌더링 되는곳 */}
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
    </>)
}