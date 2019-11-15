/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:46
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 15:34:35
 */
import React, { useEffect } from "react";
import Button from "../../components/Button";
import * as actions from "../../store/actions/page2";
import { connect } from "react-redux";

const Page2 = props => {
  useEffect(() => {
    // props.changePage2Title("Hello Page2"); 为了体现数据持久化
    return () => {};
  }, []);

  const gotoPage1 = () => props.history.push("/page1");

  const changeTitle = () => props.changePage2Title(Date.now());

  return (
    <div style={{ backgroundColor: "green", width: "100%", height: "100%" }}>
      <h1>{props.page2.title}</h1>
      <Button onClick={changeTitle}>change title</Button>
      <Button onClick={gotoPage1}>goto page1</Button>
    </div>
  );
};

export default connect(state => ({ page2: state.page2 }), actions)(Page2);
