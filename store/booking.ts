import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookingInfoType } from "../types";
type IinitialState = {
  bookingInfo: BookingInfoType | null;
  error: null;
};
const initialState: IinitialState = {
  bookingInfo: null,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingInfo(
      state: IinitialState,
      action: PayloadAction<BookingInfoType>
    ) {
      console.log(action.payload);
      state.bookingInfo = action.payload;
    },
  },
});

export const { setBookingInfo } = bookingSlice.actions;
export default bookingSlice.reducer;
