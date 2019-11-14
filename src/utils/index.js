/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 18:29:55
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 18:33:50
 */
import { get } from "../request";

/**
 * @description 展示警告框
 * @author peter.yuan
 * @export
 * @param {*} text
 */
export function showAlert(text) {
  alert(text);
}

/**
 * @description 从后台获取省份数据
 * @author peter.yuan
 * @export
 * @returns
 */
export async function fetchProvinces() {
  try {
    return await get("/json/provinces.json");
  } catch (error) {
    showAlert(error.message);
    return [];
  }
}

export default {
  showAlert,
  fetchProvinces
};
