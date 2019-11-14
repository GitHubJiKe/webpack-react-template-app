import { fetchProvinces } from "../../utils";

/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 19:10:18
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 19:18:59
 */
export const FETCH_PROVINCES = "FETCH_PROVINCES";

export default function fetchProvincesAction() {
  return async dispatch => {
    const provinces = await fetchProvinces();
    dispatch({ type: FETCH_PROVINCES, payload: provinces });
  };
}
