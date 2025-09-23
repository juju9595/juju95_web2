/*
    스토어 : 여러개의 상태를 보관하는 저장소, 1개 존재해야한다.
    configureStore()
 */

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice.jsx'

//[1] 스토어 만들기
const store = configureStore({
    reducer : {
        //[2] 내가 만든 슬라이스(상태)를 등록한다.
        user : userSlice
    }
})
export default store;