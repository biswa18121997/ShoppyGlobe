import {createSlice} from '@reduxjs/toolkit'

let CartSlice=createSlice({
    name:"CartSlice",
    initialState:{
        Cart:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.Cart.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.Cart=state.Cart.filter((item)=>item.id!==action.payload);
        },
        clear:(state,action)=>{
            state.Cart.length=0;
        },
        
    }
})
export const {addItem,removeItem,clear}=CartSlice.actions;
export default CartSlice.reducer;