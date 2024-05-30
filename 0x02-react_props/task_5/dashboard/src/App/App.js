import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App() {
  const isLoggedIn = false;
  return (
    <>
    <Notifications />
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>

      <div className="App-footer">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
