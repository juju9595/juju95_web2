import { Link } from "react-router-dom"

export default function Header(props){

    
    return(<>
    <div>
        <h3>헤더</h3>
        <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/menu">메뉴페이지</Link></li>
            <li><Link to="/cart">장바구니</Link></li>
        </ul>
    </div>
    </>)
}