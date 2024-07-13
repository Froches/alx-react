import React from 'react';
import { StyleSheet, css } from "aphrodite";
import logo from '../assets/holberton-logo.jpg';


 function Header() {
    return <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
    </div>
}

export default Header;