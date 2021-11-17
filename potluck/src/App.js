import React, { useEffect, useState } from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import CreatePotluckPage from "./components/CreatePotluckPage";
import Logout from "./components/Logout";
import Login from "./components/Login"; 
import Dashboard from "./components/Dashboard"; 
import NavBar from "./components/NavBar";

import Signup from "./components/Signup";

import * as yup from 'yup';
import form from './components/Validation/LoginFormSchema';


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
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <PrivateRoute path="/potluck/create">
          <CreatePotluckPage />
        </PrivateRoute>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>

    </div>
   
  );
}

export default App;
