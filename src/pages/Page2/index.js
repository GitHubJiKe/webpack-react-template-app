import React from "react";
import { showAlert } from "../../utils";
import Button from "../../components/Button";
export default () => (
  <div style={{ backgroundColor: "green" }}>
    <h1>Page2</h1>
    <Button
      onClick={() => {
        showAlert("hello world");
      }}
    >
      function test
    </Button>
  </div>
);
