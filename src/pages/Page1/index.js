/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:39
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 16:27:55
 */
import React from "react";
import { showAlert } from "../../utils";
import Button from "../../components/Button";
import { routeHistory } from "../../App";
export default props => (
  <div style={{ backgroundColor: "yellow" }}>
    <h1>Page1</h1>
    <Button
      type="primary"
      onClick={() => {
        showAlert("hello world");
      }}
    >
      function test
    </Button>
    <Button
      onClick={() => {
        routeHistory.push("/page2");
      }}
    >
      goto page2
    </Button>
  </div>
);
