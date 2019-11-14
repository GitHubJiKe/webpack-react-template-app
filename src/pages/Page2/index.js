/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:46
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 17:20:33
 */
import React from "react";
import { showAlert } from "../../utils";
import Button from "../../components/Button";
import { routeHistory } from "../../App";

const Page2 = () => (
  <div style={{ backgroundColor: "green" }}>
    <h1>Page2</h1>
    <Button
      onClick={() => {
        showAlert("hello world");
      }}
    >
      function test
    </Button>
    <Button
      onClick={() => {
        routeHistory.push("/page1");
      }}
    >
      goto page1
    </Button>
  </div>
);

export default Page2;
