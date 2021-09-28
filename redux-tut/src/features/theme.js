import { createSlice } from "@reduxjs/toolkit";

// state is previous state
// action is current state

// or set the initialStateValue
const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
