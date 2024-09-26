import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../types/types";

const initialState: FormValues = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ login: string }>) => {
      state.email = action.payload.login;
    },
    setPassword: (state, action: PayloadAction<{ password: string }>) => {
      state.password = action.payload.password;
    },
  },
});

export const { setLogin, setPassword } = userSlice.actions;
export default userSlice.reducer;
