import axiosClient from "../helpers/AxiosHelper";
import constants from "../helpers/constants";
import { login } from "../store/auth";

export const getSpeciality = async (id: string | string[]) => {
  return axiosClient({
    method: "Get",
    url: constants.getSpeciality + "/" + id,
    responseType: "json",
  });
};
