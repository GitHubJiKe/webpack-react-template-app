/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 16:03:14
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 17:19:08
 */
import React from "react";
import "./index.less";

const Content = ({ children, style }) => (
  <div className="content" style={style}>
    {children}
  </div>
);

export default Content;
