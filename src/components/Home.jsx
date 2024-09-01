import React from 'react';
import { Link } from 'react-router-dom';
import QRScanner from "./QRScanner";
import './Home.css';

const Home = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">CartGO</a>
        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="/">cart</Link>
          <Link to="/">payments</Link>
          <Link to="/">contact</Link>
          <Link to="/">logout</Link>
        </nav>
      </header>
      
      <div>
        <QRScanner />
      </div>
    </>
  );
}

export default Home;
