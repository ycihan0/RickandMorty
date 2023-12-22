import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  value: 2,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store=configureStore({reducer:{counter: counterSlice.reducer}})
export default store;
