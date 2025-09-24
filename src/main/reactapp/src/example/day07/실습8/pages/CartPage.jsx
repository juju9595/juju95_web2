import { useSelector } from "react-redux";

export default function CartPage() {
    // ** 리덕스에 저장된 카트 목록으로 가정한다 **
    // const cart = [
    //     {id : 1, name : "아메리카노", price : 3000, count : 3}, 
    //     { id: 3, name: "카푸치노", price: 4500, count : 1},
    // ]
    //[1] 리덕스로 부터 카트 목록으로 가져온다.
    const cartList = useSelector((state)=>(state.cart.cartList))

    return (<>
        <div>
        <h2>장바구니</h2>
        {
            cartList.map((c)=>{
                return <><div>{c.name} {c.count} {c.count*c.price} </div></>
            })
        }
     </div>
    </>);
}
