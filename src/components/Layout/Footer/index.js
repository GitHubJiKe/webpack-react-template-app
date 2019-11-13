import React from "react";
import "./index.less";

export default ({ title, children, style }) => (
  <header className="footer" style={style}>
    <h3 className="title">{title || children}</h3>
  </header>
);
