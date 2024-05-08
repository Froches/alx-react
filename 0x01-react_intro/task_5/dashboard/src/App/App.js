// import './App.css';
import hbtn_logo from './hbtn_logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={hbtn_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email"> Email:</label>
        <input type='email' id='email' placeholder='Enter your email'></input>

        <label for="password"> Password:</label>
        <input type='password' id='password' placeholder='Enter your password'></input>

        <button>OK</button>
      </body>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
