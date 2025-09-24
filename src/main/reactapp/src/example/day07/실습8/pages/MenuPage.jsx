import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const menu = [
    { id: 1, name: "아메리카노", price: 3000 }, 
    { id: 2, name: "카페라떼", price: 4000 },
    { id: 3, name: "카푸치노", price: 4500 },
];

export default function MenuPage(props){

    const dispatch = useDispatch();
    const addCart = async() =>{
        alert("[담기성공]");
        dispatch(addItem(item))
    }

    return(<>
    <h3> 메뉴페이지 </h3>
    <ul>
        {menu.map((item)=>(
            <li key={item.id}>
                {item.name} {item.price}
                <button onClick={addCart}> 담기 </button>
            </li>

        ))}
    </ul>
    </>)
}