import { createSlice } from "@reduxjs/toolkit";

type IinitialState = {
  prescribtionInfo: any;
  error: null;
};
const initialState: IinitialState = {
  prescribtionInfo: null,
  error: null,
};

const prescribtionSlice = createSlice({
  name: "prescribtion",
  initialState,
  reducers: {
    setprescribtionInfo(state, { payload }) {
      state.prescribtionInfo = payload;
    },
  },
});

export const { setprescribtionInfo } = prescribtionSlice.actions;
export default prescribtionSlice.reducer;
