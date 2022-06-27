import axiosClient from "../helpers/AxiosHelper";
import constants from "../helpers/constants";
import { Dispatch } from "redux";
export const addDoctorSlots = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.addDoctorSlots,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const getDoctorSlots = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.getDoctorSlots,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const getNextSevenDaysDoctorSlots =
  (data: any) => async (dispatch: Dispatch) => {
    return axiosClient(
      {
        method: "POST",
        url: constants.getNextSevenDaysDoctorSlots,
        data: data,
        responseType: "json",
      },
      dispatch
    );
  };

export const bookSlot = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.booking,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const bookingDetails = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.bookingDetails,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const updateBooking = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.updateBooking,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const createRazorPayOrder =
  (data: any) => async (dispatch: Dispatch) => {
    return axiosClient(
      {
        method: "POST",
        url: constants.createRazorPayOrder,
        data: data,
        responseType: "json",
      },
      dispatch
    );
  };
