import { createSlice } from "@reduxjs/toolkit";
const initialState = {items: [], menuInfo : null}; //상태 초기값
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
       addItem : (state, action) => {
        const product = action.payload;
        const existing = state.items.find((item) => item.id === product.id)
        if(existing){
            existing.quantity +=1;
            state.menuInfo = action.payload;
        }else{
            state.items.push({...product, quantity: 1})
            state.menuInfo = null;
        }
       }
    }
});
export default cartSlice.reducer
export const {addItem} = cartSlice.actions;