import React from "react";
import "./index.less";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
export default Layout;
