import { createSlice } from "@reduxjs/toolkit";

// Sliceは"action","reducer","state"のまとまり
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload); //payloadには任意の値を取る、引数的な
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
