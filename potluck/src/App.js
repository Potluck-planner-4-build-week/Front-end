import React, { useEffect, useState } from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import CoverPage from "./components/CoverPage";
import CreatePotluckPage from "./components/CreatePotluckPage";
import Logout from "./components/Logout";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import ViewPage from "./components/ViewPage/ViewPage";
import * as yup from "yup";
import form from "./components/Validation/LoginFormSchema";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute path="/logout">
          <Logout />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/potluck/create">
          <CreatePotluckPage />
        </PrivateRoute>
        <PrivateRoute path="/potluck/view">
          <ViewPage />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/">
          <CoverPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
