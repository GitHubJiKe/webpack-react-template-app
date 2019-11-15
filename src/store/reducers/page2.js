/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:47:58
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 10:49:59
 */

import { CHANGE_PAGE2_TITLE } from "../actionType";

const initState = {
  title: "Page2"
};

export default function page2(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PAGE2_TITLE:
      return { ...state, title: payload.title };
    default:
      return state;
  }
}
