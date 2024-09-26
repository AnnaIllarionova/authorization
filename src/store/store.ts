import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

