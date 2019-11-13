import React from "react";
import "./index.less";

export default ({ children, style }) => (
  <div className="content" style={style}>
    {children}
  </div>
);
