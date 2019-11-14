/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 16:03:07
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 16:27:12
 */
import React from "react";
import PropTypes from "prop-types";

import "./index.less";

const Button = props => {
  const { text, children, onClick, type = "default" } = props;
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text || children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "default"])
};

export default Button;
