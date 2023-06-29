import { configureStore } from '@reduxjs/toolkit'
import lightDarkModeSlice from './slices/themes/themesSlice'
export const store = configureStore({
    reducer: {
        lightDarkMode: lightDarkModeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch