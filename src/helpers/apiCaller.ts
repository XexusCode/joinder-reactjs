import { fetchSinToken, fetchConToken } from "./fetch";
import Swal from "sweetalert2";

interface ResponseParams {
  data?: any;
  success?: boolean;
  message?: string;
}

export const apiCaller = async (
  endpoint: string,
  data: any,
  method: string,
  token: boolean
): Promise<ResponseParams> => {
  if (token) {
    const response = await fetchConToken(endpoint, data, method);
    const responseJson = await response.json();

    if (responseJson.success) {
      return responseJson;
    } else {
      if (endpoint !== "auth/renew")
        Swal.fire("Error", `${responseJson.message}`, "error");

      return { success: false };
    }
  } else {
    const response = await fetchSinToken(endpoint, data, method);
    const responseJson = await response.json();

    if (responseJson.success) {
      return responseJson;
    } else {
      Swal.fire("Error", `${responseJson.message}`, "error");

      return { success: false };
    }
  }
};
