import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function MenuPage(props){
    //1. 서버로 받은 제품목록 가정한다.
    const menu = [
    { id: 1, name: "아메리카노", price: 3000 }, 
    { id: 2, name: "카페라떼", price: 4000 },
    { id: 3, name: "카푸치노", price: 4500 },
];


    const dispatch = useDispatch();
    const addCart = async(m) =>{
        dispatch(addItem(m))
    }

    return(<>
    <h3> 메뉴페이지 </h3>
    {/* 컴포넌트내 return 안에서는 jsx 문법을 따라야한다. */}
    
        {
        /* jsx 시작알림 */ /* map반복문은 반복할때마다 하나의 리턴값을 반환한다. */
        menu.map((m)=>{
            return <> 
            <div>
                {m.name} {m.price} 
                <button onClick={() =>{addCart(m)}}> 담기 </button> 
            </div>
            </>
        })} 

    </>)
}