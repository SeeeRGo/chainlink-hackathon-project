import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: string[] = [];

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
  },
  extraReducers: () => {
  },
});

export const selectRoot = (state: RootState) => state.sample

export default sampleSlice.reducer
