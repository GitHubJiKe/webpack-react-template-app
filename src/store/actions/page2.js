/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 10:45:22
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 11:25:13
 */

import { CHANGE_PAGE2_TITLE } from "../actionType";

export function changePage2Title(title) {
  return {
    type: CHANGE_PAGE2_TITLE,
    payload: {
      title
    }
  };
}
