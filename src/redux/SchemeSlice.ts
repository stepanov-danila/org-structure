import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SchemeState {
  test: string;
}

const initialState: SchemeState = {
  test: "test",
};

export const SchemeSlice = createSlice({
  name: "scheme",
  initialState,
  reducers: {
    changeTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTest } = SchemeSlice.actions;

export default SchemeSlice.reducer;
