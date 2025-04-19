import {configureStore} from '@reduxjs/toolkit'
import  cartReducer from './CartSlice'

let Store=configureStore({
    reducer:{
        cart:cartReducer,
    },
});
export default Store;