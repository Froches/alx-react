import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div classname="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email:</label>
        <input type='email' name='email' placeholder='Enter your email'></input>

        <label htmlFor="password"> Password:</label>
        <input type='password' name='password' placeholder='Enter your password'></input>

        <button>OK</button>
      </div>

      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </div>
  );
}

export default App;
