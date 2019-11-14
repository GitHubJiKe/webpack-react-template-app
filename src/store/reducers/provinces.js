import { FETCH_PROVINCES } from "../actions/provinces";

/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 19:05:13
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 19:10:30
 */

const initState = {
  provinces: []
};

export default function provinces(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROVINCES:
      return { ...state, provinces: payload };

    default:
      return state;
  }
}
