/*
 * @Author: peter.yuan
 * @Date: 2019-11-14 15:58:14
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 11:48:56
 */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import * as actions from "./store/actions/app";
import "./App.less";
import RouterView from "./routes";

const { Header, Footer, Content } = Layout;

const App = props => {
  const fetchData = async () => {
    await props.fetchProvincesAction();
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <Layout>
      <Header>webpack react template app</Header>
      <Content>
        {renderProvinces(props.app.provinces)}
        <RouterView />
      </Content>
      <Footer>@peter.yuan</Footer>
    </Layout>
  );
};

const provinceViewStyle = {
  width: 250,
  height: "100%",
  backgroundColor: "red",
  color: "white"
};

function renderProvinces(provinces) {
  return (
    <div style={provinceViewStyle}>
      {provinces.map(p => (
        <div key={p.id}>
          {p.id} {p.label}
        </div>
      ))}
    </div>
  );
}

export default connect(state => ({ app: state.app }), actions)(App);
