import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    initialState: 0,
    name: "counter", // for dev tools
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1
    }
})

// dispatch the actions.
export const { increment, decrement } = counterSlice.actions;

// export reducers

export default counterSlice.reducer;