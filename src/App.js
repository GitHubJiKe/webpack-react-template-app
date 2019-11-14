/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:14
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-14 19:18:01
 */

import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createHashHistory } from "history";
import Layout from "./components/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import fetchProvincesAction from "./store/actions/provinces";
import "./App.less";

const { Header, Footer, Content } = Layout;
export const routeHistory = createHashHistory();

class App extends Component {
  async componentDidMount() {
    this.props.fetchProvincesAction();
  }

  render() {
    return (
      <Layout>
        <Header>webpack react template app</Header>
        <Content>
          <h3>provinces count:{this.props.provinces.length}</h3>
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
const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = { fetchProvincesAction };
export default connect(mapStateToProps, mapDispatchToProps)(App);
