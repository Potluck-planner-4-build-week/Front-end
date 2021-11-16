import React, { useEffect, useState } from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import CreatePotluckPage from "./components/CreatePotluckPage";
import Logout from "./components/Logout";
import Login from "./components/Login";
import ViewPage from "./components/ViewPage/ViewPage";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/logout">Logout</Link>
      </nav>
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
      </Switch>
    </div>
  );
}

export default App;
