import axiosClient from "../helpers/AxiosHelper";
import constants from "../helpers/constants";
import { Dispatch } from "redux";
export const fileupload = (data: any) => async (dispatch: Dispatch) => {
  return axiosClient(
    {
      method: "POST",
      url: constants.fileupload,
      data: data,
      responseType: "json",
    },
    dispatch
  );
};
