/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 16:03:22
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 17:18:23
 */
import React from "react";
import "./index.less";

const Header = ({ title, children }) => (
  <header className="header">
    <h1 className="title">{title || children}</h1>
  </header>
);

export default Header;
