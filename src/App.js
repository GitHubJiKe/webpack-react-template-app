/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:14
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 18:33:30
 */

import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import "./App.less";
import Layout from "./components/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { fetchProvinces, showAlert } from "./utils";

const { Header, Footer, Content } = Layout;
export const routeHistory = createHashHistory();

export default class App extends Component {
  state = {
    provinces: []
  };

  async componentDidMount() {
    const provinces = await fetchProvinces();
    this.setState({ provinces });
  }

  render() {
    return (
      <Layout>
        <Header>webpack react template app</Header>
        <Content>
          <h3>provinces count:{this.state.provinces.length}</h3>
          <Router history={routeHistory}>
            <Route exact path="/" component={Page1}></Route>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
          </Router>
        </Content>
        <Footer>@peter.yuan</Footer>
      </Layout>
    );
  }
}
