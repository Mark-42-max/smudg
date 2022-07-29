import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Aishwarya",
  gender: "",
  q1: "",
  q2: "",
  q3: [],
  q4: [],
};

export const optionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setQ1: (state, action) => {
      state.q1 = action.payload;
    },
    setQ2: (state, action) => {
      state.q2 = action.payload;
    },
    setQ3: (state, action) => {
      state.q3 = [...state.q3, action.payload];
    },
    setQ4: (state, action) => {
      state.q4 = [...state.q4, action.payload];
    },
  },
});

export const { setName, setGender, setQ1, setQ2, setQ3, setQ4 } =
  optionSlice.actions;

export const selectName = (state) => state.options.name;
export const selectGender = (state) => state.options.gender;
export const selectQ1 = (state) => state.options.q1;
export const selectQ2 = (state) => state.options.q2;
export const selectQ3 = (state) => state.options.q3;
export const selectQ4 = (state) => state.options.q4;

export default optionSlice.reducer;
