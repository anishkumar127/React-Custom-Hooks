import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("lightDarkMode") !== undefined && localStorage.getItem("lightDarkMode") !== null ? JSON.parse(localStorage.getItem("lightDarkMode")) : "site",
}
export const lightDarkModeSlice = createSlice({
    name: "lightDarkMode",
    initialState,
    reducers: {
        toggleLightDarkMode: (state) => {
            console.log(state, state.mode);
            if (state.mode === "light") {
                state.mode = "light";
            } else if (state.mode === "dark") {
                state.mode = "dark";
            } else {
                state.mode = "site";
            }
            localStorage.setItem("lightDarkMode", JSON.stringify(state.mode));
        }
    }
})

export const { toggleLightDarkMode } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;