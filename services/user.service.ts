import axiosClient from "../helpers/AxiosHelper";
import constants from "../helpers/constants";
import { login } from "../store/auth";
import { Dispatch } from "redux";
export const getStudents = () => async (dispatch: Dispatch) => {
  console.log();
  return dispatch(
    await axiosClient({
      method: "Get",
      url: constants.getStudents,

      responseType: "json",
    })
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        console.log(error);
      })
  );
};
