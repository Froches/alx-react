import './App.css';
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
      </body>

      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
