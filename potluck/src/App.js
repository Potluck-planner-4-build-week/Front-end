import React from 'react';
import { Link, Route } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <nav>
          <h1>Team Build</h1>
        </nav>
      </header>
    </div>
  );
}

export default App;
