import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:{items:[]},
  reducers: {
    addToCart:(state,action)=>{
     const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems = [...state.items];
      if (existingCartItemIndex !== -1) {
        //burada remove fonksiyonunu çalıştır
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          // amount:
          //   state.items[existingCartItemIndex].amount + action.payload.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        
      };
     
      // const newItem=action.payload;
      // const existingItem=state.items.find((item)=>item.id===newItem.id);
      // if(existingItem){
      //   existingItem.quantity+=newItem.quantity;
      // }
      // else{
      //   state.items.push(newItem);
      // }
     
    },
    removeFromCart:(state,action)=>{
      const itemIdToRemove=action.payload;
      state.items=state.items.filter(item=>item.id!==itemIdToRemove)
    },
    clearCart:(state)=>{
        state.items=[];
    }
   
  },
});

const store=configureStore({reducer:{cart: cartSlice.reducer}})
export const cartActions=cartSlice.actions
export default store;
