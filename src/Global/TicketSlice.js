import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const TicketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = TicketSlice.actions;

export default TicketSlice.reducer;
