import React from "react";
import "./index.less";

export default props => {
  const { text, children, onClick, type = "primary" } = props;
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text || children}
    </button>
  );
};
