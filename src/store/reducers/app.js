/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 19:05:13
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 10:37:07
 */

import { FETCH_PROVINCES } from "../actionType";

const initState = {
  provinces: []
};

export default function app(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROVINCES:
      return { ...state, provinces: payload };

    default:
      return state;
  }
}
