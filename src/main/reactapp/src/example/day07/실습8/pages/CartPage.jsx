import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
    const {isAuthenticated, menuInfo} = useSelector((state => state.menu));

    const dispatch = useDispatch();

    return (
        <div>
        <h2>장바구니</h2>
        {items.length === 0 ? (
            <p>장바구니가 비어 있습니다.</p>
        ) : (
            <ul>
            {items.map((menuInfo) => (
                <li key={item.id}>
                {menuInfo.name} {menuInfo.quantity} {" "}
                {menuInfo.price * menuInfo.quantity}원
                </li>
            ))}
            </ul>
        )}
        <h3>총 합계: {total}원</h3>
        </div>
    );
}
