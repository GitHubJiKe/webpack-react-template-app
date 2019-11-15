/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:39
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 15:35:54
 */
import React, { Component } from "react";
import Button from "../../components/Button";
import * as actions from "../../store/actions/page1";
import { connect } from "react-redux";
class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.changePage1Title("Hello Page1"); 为了体现数据持久化
  }

  handleChangeTitle = () => this.props.changePage1Title(Date.now());

  gotoPage2 = () => this.props.history.push("/page2");

  render() {
    return (
      <div style={{ backgroundColor: "yellow", width: "100%" }}>
        <h1>{this.props.page1.title}</h1>
        <Button type="primary" onClick={this.handleChangeTitle}>
          change title
        </Button>
        <Button onClick={this.gotoPage2}>goto page2</Button>
      </div>
    );
  }
}

export default connect(state => ({ page1: state.page1 }), actions)(Page1);
