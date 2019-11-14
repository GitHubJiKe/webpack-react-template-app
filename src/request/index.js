/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 18:26:38
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 18:34:47
 */
import Axios from "axios";

const request = Axios.create({
  baseURL: "http://c1.boldseas.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  },
  responseType: "json"
});
/**
 * @description 处理返回结果
 * @author peter.yuan
 * @param {*} result
 * @returns
 */
function handleRes(result) {
  const { status, statusText, data } = result;
  if (status === 200) {
    return data;
  } else {
    throw new Error(statusText);
  }
}
/**
 * @description 处理错误异常
 * @author peter.yuan
 * @param {*} err
 */
function handleError(err) {
  throw err;
}

/**
 * @description get request
 * @author peter.yuan
 * @export
 * @param {*} url
 * @param {*} params
 * @returns
 */
export function get(url) {
  return request
    .get(url)
    .then(handleRes)
    .catch(handleError);
}
/**
 * @description post request
 * @author peter.yuan
 * @export
 * @param {*} url
 * @param {*} params
 * @returns
 */
export function post(url, params) {
  return request
    .post(url, params)
    .then(handleRes)
    .catch(handleError);
}

export default {
  get,
  post
};
