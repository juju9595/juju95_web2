import { use, useState } from "react"

export default function(props){

    // 입력값
    //이름
    const[name, setName] = useState('');
    const nameAdd = (e) =>{
        setName(e.target.value);
    }
    //연락처
    const[phone, setPhone] = useState('');
    const phoneAdd =(e) =>{
        setPhone(e.target.value);
    }
    //나이
    const[age, setAge] = useState(''); 
    const ageAdd = (e) =>{
        setAge(e.target.value);
    }
    
    //리스트
    const [list, setList] = useState([]);
    //등록
    const onAdd = () =>{ 
        const newList = {name, phone, age};
        setList([...list, newList]);
    }

    //삭제
    const deleteList = (index) =>{
        const copy = [...list];
        copy.splice(index,1);
        setList(copy);
    }

    return(<>
    <h3>전화번호부</h3>
    <input value={name} onChange={nameAdd} placeholder="성명"/>
    <input value={phone} onChange={phoneAdd} placeholder="연락처 (예: 010-1234-5678)"/>
    <input value={age} onChange={ageAdd} placeholder="나이"/>
    <button onClick={onAdd}>등록</button>


    {/* 목록렌더링 */}
    <ul>
        {list.map((data, index) => ( // Component5.jsx 참고
            <li key ={index}>
                성명: {data.name} 연락처:{data.phone} 나이:{data.age}
                <button onClick={() => deleteList(index)}>삭제</button>
            </li>
        ))}
    </ul>
    총 {list.length}명
    </>);
}