/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:46
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-19 16:13:53
 */
import React, { useEffect, Fragment } from "react";
import Button from "../../components/Button";
import * as actions from "../../store/actions/page2";
import PageContainer from "../../components/PageContainer";
import driveCarUrl from "../../assets/images/drive_car2.jpg";
const Page2 = props => {
  useEffect(() => {
    // props.changePage2Title("Hello Page2"); 为了体现数据持久化
    return () => {};
  }, []);

  const gotoPage1 = () => props.history.push("/page1");

  const changeTitle = () => props.changePage2Title(Date.now());

  return (
    <Fragment>
      <h1>{props.page2.title}</h1>
      <img src={driveCarUrl} />
      <Button onClick={changeTitle}>change title</Button>
      <Button onClick={gotoPage1}>goto page1</Button>
    </Fragment>
  );
};
export default PageContainer(Page2, {
  bgColor: "green",
  stateKey: "page2",
  actions
});
