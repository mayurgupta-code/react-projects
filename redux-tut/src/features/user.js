import { createSlice } from "@reduxjs/toolkit";

// state is previous state
// action is current state

// or set the initialStateValue
// const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
