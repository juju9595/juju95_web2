import { use, useState } from "react"

export default function(props){
    

    //1. useState : 상태(변수값) 관리(변수값따른재렌더링) 훅
    //이름
    const[name, setName] = useState('');
    //연락처
    const[phone, setPhone] = useState('');
    //나이
    const[age, setAge] = useState(''); 
    
    //리스트
    const [list, setList] = useState([]); // 회원정보 객체를 담는 리스트
    //const [members, setMembers] = useState([]); // 강사님 코드
    //등록
    const onAdd = () =>{ 
        const newList = {name, phone, age};
        setList([...list, newList]);
    }
    {/* 강사님 코드 
    const onAdd = () =>{
        //2-1 : 입력받은 데이터들을 객체화
        const obj = {name, phone, age} //2-1 : 입력받은 데이터들을 객체화 
        memebers.push(obj);//2-2 : 객체를 리스트에 저장
        setMembers([...members]//2-3 : 리스트를 재랜더링
        // (주의할점 : 객체는 ...스프레드 연산자 이용한 복사 = 주소값 변경)
         
        } */}
    //삭제
    const deleteList = (index) =>{
        const copy = [...list];
        copy.splice(index,1);
        setList(copy);
    }
    {/* 강사님 코드
    //3. 삭제 버튼을 클릭했을때, 무엇을 삭제할지 매개변수(pk/중복값없는) 필요
    const onDelete = ( deletePhone ) => { console.log(deletePhone);
    //3-1 : 반복문 이용하여 리스트내 삭제할 번호를 찾아서 제거한다.
        const newMembers = members.filter( (m) =>{ (m.phone != deletePhone;)}
        //3-2 : *** 수정된 리스트를 재렌더링 
        setMembers([...newMembers]);
    }
    */}

    
    return(<>
    <h3>전화번호부</h3>
    <input value={name} onChange={(e) =>{setName(e.target.value);}} placeholder="성명"/>
    <input value={phone} onChange={(e) =>{setPhone(e.target.value);}} placeholder="연락처 (예: 010-1234-5678)"/>
    <input value={age} onChange={(e) =>{setAge(e.target.value);}} placeholder="나이"/>
    <button onClick={onAdd}>등록</button>



    {/* 목록렌더링 */}
    <ul>
        {list.map((data, index) => ( // Component5.jsx 참고
            <li key ={index}>
                성명: {data.name} 연락처:{data.phone} 나이:{data.age}
                <button onClick={() => deleteList(index)}>삭제</button>
                {/* 강사님 코드
                {
                members.map((m) => {
                    return <div> 
                        {m.name} {m.phone} {m.age} 
                        <button onClick = {() => {onDelete()}}>삭제</button>
                
                </div>})
                } */}
            </li>
        ))}
    </ul>
    총 {list.length}명
    </>);
}

    // ------------jsx 에서 {} 중괄호 js표현식의 시작과 끝
    // ------------[1] 1. onClick = {함수명} 또는 2. onClick = {() =>{}} 3. 주의할점 : onClick={() => 함수명(매개변수)}
    // ------------[2] 리스트 출력시 forEach 대신에 map 사용한다.