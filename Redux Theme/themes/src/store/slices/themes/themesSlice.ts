import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("lightDarkMode") !== undefined && localStorage.getItem("lightDarkMode") !== null ? JSON.parse(localStorage.getItem("lightDarkMode")) : "site",
}
export const lightDarkModeSlice = createSlice({
    name: "lightDarkMode",
    initialState,
    reducers: {
        setLightMode: (state) => {
            state.mode = "light";
            localStorage.setItem("lightDarkMode", JSON.stringify(state.mode));
        },
        setDarkMode: (state) => {
            state.mode = "dark";
            localStorage.setItem("lightDarkMode", JSON.stringify(state.mode));
        },
        setSiteMode: (state) => {
            state.mode = "site";
            localStorage.setItem("lightDarkMode", JSON.stringify(state.mode));
        },
    }
})

export const { setLightMode, setDarkMode, setSiteMode } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;