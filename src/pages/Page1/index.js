import React from "react";
import { showAlert } from "../../utils";
import Button from "../../components/Button";
export default () => (
  <div style={{ backgroundColor: "yellow" }}>
    <h1>Page1</h1>
    <Button
      onClick={() => {
        showAlert("hello world");
      }}
    >
      function test
    </Button>
  </div>
);
