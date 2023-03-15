
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
    },
    reducers:{
        addItem:(state,action) => {
            state.items.push(action.payload);
        },
        // addItem: (state, action) => {
        //     const item = state.items[action.payload.id];
        //     const quantity =
        //       item && item.hasOwnProperty("quantity")
        //         ? state.items[action.payload.id]?.quantity + 1
        //         : 1;
        //     state.items[action.payload.id] = {...action.payload, quantity };
        //     state.totalItemsCount = state.totalItemsCount + 1;
        // },
        clearCart:(state) => {
            state.items=[];
        },
        // clearCart: (state) => {
        //     state.items = {};
        //     state.totalItemsCount = 0;
        // },
        removeItem: (state, action) => {
            var arr=[];
            state.items.map((item) => {
             if(item.id===action.payload){}
             else arr.push(item)
             })
            state.items=arr;
        },
    },
});

export const {addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
