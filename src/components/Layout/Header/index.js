import React from "react";
import "./index.less";

export default ({ title, children }) => (
  <header className="header">
    <h1 className="title">{title || children}</h1>
  </header>
);
