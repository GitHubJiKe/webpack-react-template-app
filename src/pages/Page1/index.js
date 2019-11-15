/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:39
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 17:59:55
 */
import React, { Component, Fragment } from "react";
import Button from "../../components/Button";
import * as actions from "../../store/actions/page1";
import PageContainer from "../../components/PageContainer";

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "peter"
    };
  }

  componentDidMount() {
    // this.props.changePage1Title("Hello Page1"); 为了体现数据持久化
  }

  handleChangeTitle = () => this.props.changePage1Title(Date.now());

  gotoPage2 = () => this.props.history.push("/page2");

  render() {
    return (
      <Fragment>
        <h1>
          {this.props.page1.title}/{this.state.name}
        </h1>
        <Button type="primary" onClick={this.handleChangeTitle}>
          change title
        </Button>
        <Button onClick={this.gotoPage2}>goto page2</Button>
        <Button
          onClick={() => {
            this.setState({ name: Date.now() });
          }}
        >
          change name
        </Button>
      </Fragment>
    );
  }
}
export default PageContainer(Page1, {
  bgColor: "yellow",
  stateKey: "page1",
  actions
});
