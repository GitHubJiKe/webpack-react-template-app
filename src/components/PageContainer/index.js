/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 16:36:13
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 17:45:49
 */
import React, { Component } from "react";
import { connect } from "react-redux";

export default (WrapedComponent, config) => {
  const { bgColor, stateKey, actions } = config;
  @connect(state => ({ [stateKey]: state[stateKey] }), actions)
  class HOCCompoennt extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div style={{ width: "100%", backgroundColor: bgColor }}>
          <WrapedComponent {...this.props} />
        </div>
      );
    }
  }
  return HOCCompoennt;
};
