import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isFavorite: false,
  },
  reducers: {
    addToCart: (state, action) => {
     
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        let updatedItems = [...state.items];
        let updateIsFavorite = state.isFavorite;

        if (existingCartItemIndex !== -1) {
          updatedItems = updatedItems.filter(
            (item) => item.id !== action.payload.id
          );

          updateIsFavorite = false;
        } else {
          if (state.items.length < 10) {
          updatedItems = [...state.items, action.payload];
          updateIsFavorite = true;
        } else {
          console.log("sepet doldu");
        }
        }

        return {
          isFavorite: updateIsFavorite,
          items: updatedItems,
        };
      
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

const characterSlice = createSlice({
  name:"characters",
  initialState:{},
  reducers:{

  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });
export const cartActions = cartSlice.actions;
export default store;
