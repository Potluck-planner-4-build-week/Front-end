import React from 'react';
import { Link, Route } from 'react-router-dom';

import Login from './components/Login';

const initialLoginValues = {
  username: '',
  password: ''
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Team Build</h1>
        </nav>
      </header>
    </div>
  );
}

export default App;
