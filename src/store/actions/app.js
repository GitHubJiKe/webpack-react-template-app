/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 19:10:18
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 11:25:04
 */
import { fetchProvinces } from "../../utils";
import { FETCH_PROVINCES } from "../actionType";

export function fetchProvincesAction() {
  return async dispatch => {
    const provinces = await fetchProvinces();
    dispatch({ type: FETCH_PROVINCES, payload: provinces });
  };
}
