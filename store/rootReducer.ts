import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth";
import bookingSlice from "./booking";
import prescribtionSlice from "./prescribtion";
export const rootReducer = combineReducers({
  auth: authSlice,
  booking: bookingSlice,
  prescribtion: prescribtionSlice,
});
