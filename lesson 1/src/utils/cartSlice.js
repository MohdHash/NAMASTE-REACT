import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{       // reducer function
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            const index = state.items.indexOf(action.payload);

            if(index != -1){
                state.items.splice(index,1);
            }
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});

export default cartSlice.reducer;

export const {addItem , removeItem , clearCart} = cartSlice.actions;