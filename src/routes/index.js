/*
 * @Author: peter.yuan
 * @Date: 2019-11-15 11:28:34
 * @Last Modified by: peter.yuan
 * @Last Modified time: 2019-11-15 11:34:31
 */
import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const routes = [
  {
    exact: true,
    path: "/",
    component: Page1
  },
  {
    path: "/page1",
    component: Page1
  },
  {
    path: "/page2",
    component: Page2
  }
];

const routeHistory = createHashHistory();

export default () => (
  <Router history={routeHistory}>
    {routes.map(r => (
      <Route key={r.path} {...r}></Route>
    ))}
  </Router>
);
