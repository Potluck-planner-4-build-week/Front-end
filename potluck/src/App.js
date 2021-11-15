import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";

import CreatePotluckPage from "./components/CreatePotluckPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/something">
          <CreatePotluckPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
