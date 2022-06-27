import axios from "axios";
import { authHeader } from "./AuthHeader";
import { handleLoginModal, logout } from "../store/auth";
import constants from "./constants";
import { Dispatch } from "redux";
const client = axios.create({
  baseURL: constants.baseUrl,
});
type RequestConfig = {
  headers: HttpHeaders;
};
type HttpHeaders = {
  [key: string]: string;
};

const axiosClient = async (options: any, dispatch?: Dispatch) => {
  // const router = useRouter();
  const auth = authHeader();
  options.headers = {
    Authorization: auth.Authorization,
  };

  const onSuccess = (response: any) => response.data;
  const onError = (error: any) => {
    if (error.response) {
      console.log("err", error.response);
      if (
        error.response.status == 401 ||
        error.response.data == "Unautorized" ||
        error.response["data"]["message"] == "Unautorized"
      ) {
        console.log("inside");
        sessionStorage.clear();
        if (dispatch) {
          dispatch(logout());
        }

        // router.push("/");
        // dispatch(handleLoginModal(true));
      }
      return Promise.reject(error.response || error.message);
    }
  };
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default axiosClient;
