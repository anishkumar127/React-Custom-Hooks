import { createSlice } from "@reduxjs/toolkit";

const modeFromLocalStorage = localStorage.getItem("lightDarkMode");
const defaultMode = "site";

const initialState = {
    mode: modeFromLocalStorage !== null && modeFromLocalStorage !== undefined ? JSON.parse(modeFromLocalStorage) : defaultMode,
}
export const lightDarkModeSlice = createSlice({
    name: "lightDarkMode",
    initialState,
    reducers: {
        setThemesMode: (state, action) => {
            state.mode = action.payload;
            localStorage.setItem("lightDarkMode", JSON.stringify(state.mode));
        },
    }
})

export const { setThemesMode } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;