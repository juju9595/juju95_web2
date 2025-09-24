//[1] 카트 전역상태 어떻게 구상할지 초기값 선언
import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartList :[{id : 1, name : "아메리카노", price : 3000, count : 3}]}; //상태 초기값
const 카드슬라이스 = createSlice({
    name : "cart",
    initialState,
    reducers : {
       addItem : (state, action) => {
            // 액션으로 부터 받은 제품을 상태에 담기
            // 1. 액션으로부터 받은 제품이 cart(상태)에 존재하는지 검사
        const product = action.payload;
        let findItem = false;
        // 2. 만약에 cart에 존재하는 제품이면 count 1증가
        state.cartList.forEach((p) =>{
            if(p.id == product.id){
                p.count += 1; findItem = true;}
        })
        // 2. 아니면 cart에 제품정보를 count 1로 해서 push 한다.
            product.count = 1;
            if( findItem == false){state.cartList.push({...product});}
       }
    }
});
//[3] 내보내기
export default 카드슬라이스.reducer
export const addItem = 카드슬라이스.actions.addItem ;
export const deleteItem = 카드슬라이스.actions.deleteItem;