import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Slice'
const Store = configureStore({
    reducer:{
      loginReducer,
    },
})

export default Store;