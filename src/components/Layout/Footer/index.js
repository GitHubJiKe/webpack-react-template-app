/*
 * @Author: peter.yuan 
 * @Date: 2019-11-14 16:03:18 
 * @Last Modified by:   peter.yuan 
 * @Last Modified time: 2019-11-14 16:03:18 
 */
import React from "react";
import "./index.less";

export default ({ title, children, style }) => (
  <header className="footer" style={style}>
    <h3 className="title">{title || children}</h3>
  </header>
);
