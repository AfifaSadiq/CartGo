import React from 'react'
import AddToCart from "./AddToCart";
import './Home.css'

const Home = () => {
  return (
    <>
    <header className="header">
        <a href="/" className="logo">CartGO</a>
        <nav className="navbar">
            <a href="/">home</a>
            <a href="/Cart">cart</a>
            <a href="/">payments</a>
            <a href="/">contact</a>
            <a href="/">logout</a>
        </nav>
    </header>
    <div className="AddToCart">
      <AddToCart />
    </div>
    </>
  )
}

export default Home