import React, { Component } from "react";
import "./App.less";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
const { Header, Footer, Content } = Layout;

const page_PageViewMap = {
  page1: Page1,
  page2: Page2
};

export default class App extends Component {
  state = {
    currentPage: "page1"
  };

  swipPage = () => {
    this.setState(state => {
      return { currentPage: state.currentPage === "page1" ? "page2" : "page1" };
    });
  };

  render() {
    const CurrentPageView = page_PageViewMap[this.state.currentPage];
    return (
      <Layout>
        <Header>webpack react template app</Header>
        <Content>
          <CurrentPageView />
          <Button onClick={this.swipPage}>切换页面</Button>
        </Content>
        <Footer>@peter.yuan</Footer>
      </Layout>
    );
  }
}
