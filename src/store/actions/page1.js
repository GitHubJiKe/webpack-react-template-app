/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:45:22
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 11:25:19
 */

import { CHANGE_PAGE1_TITLE } from "../actionType";

export function changePage1Title(title) {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE1_TITLE,
      payload: {
        title
      }
    });
  };
}
