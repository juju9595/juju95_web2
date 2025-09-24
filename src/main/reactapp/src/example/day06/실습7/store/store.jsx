/*
    스토어 : 여러개의 상태를 보관하는 저장소, 1개 존재해야한다.
    configureStore()
 */
/*
    퍼시스턴스 : 로컬/세션 스토리지에 상태 유지하는 방법
    1. 설치 : npm i redux-persist
    2. 스로티지 설정

*/
//[4] redux-persist 설정 //const persistConfig = {key :'key 이름', storage vs storageSession}
import storage from 'redux-persist/lib/storage'; // localStorage 사용
import storageSession from 'redux-persist/lib/storage/session'// session 사용
const persistConfig = {key :'user', storage } // localStorage 에 'user'라는 이름으로 상태 저장

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice.jsx'

//[5] 리듀서에 persist 설정 적용 ,persistedReducer( 옵션, 설정할리듀서 );
import { persistStore, persistReducer } from 'redux-persist';
const persistedReducer = persistReducer( persistConfig, userSlice);
//[1] 스토어 만들기
const store = configureStore({
    reducer : {
        //[2] 내가 만든 슬라이스(상태)를 등록한다.
       // user : userSlice // 퍼시스턴스 *적용전*
       user : persistedReducer // 퍼시스턴스 *적용후*
    }
})
export default store;
//[7] 등록된 퍼시스턴스 스토어 내보내기
export const persistor = persistStore(store);