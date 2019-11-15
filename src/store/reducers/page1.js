/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:47:58
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 10:50:22
 */

import { CHANGE_PAGE1_TITLE } from "../actionType";

const initState = {
  title: "Page1"
};

export default function page1(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PAGE1_TITLE:
      return { ...state, title: payload.title };
    default:
      return state;
  }
}
