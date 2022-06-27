import axiosClient from "../helpers/AxiosHelper";
import constants from "../helpers/constants";
import { Dispatch } from "redux";
export const addReports = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.addReports,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const getReports = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.getReports,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};

export const updateReports = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.updateReports,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};
