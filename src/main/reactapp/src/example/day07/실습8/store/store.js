import reducer from "../../../day06/userSilce";

import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './cartSlice.js'

const store = configureStore({
    reducer : {
        menu : menuReducer,
    }
});
export default store;