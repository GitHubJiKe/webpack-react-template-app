/*
 * @Author: peter.yuan 
 * @Date: 2019-11-14 16:03:14 
 * @Last Modified by:   peter.yuan 
 * @Last Modified time: 2019-11-14 16:03:14 
 */
import React from "react";
import "./index.less";

export default ({ children, style }) => (
  <div className="content" style={style}>
    {children}
  </div>
);
