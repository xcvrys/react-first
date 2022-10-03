import { Link } from "react-router-dom"
import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <>
      <nav>
        <Link to="/timer" className="link"> Timer </Link>
        <Link to="/todo" className="link"> Todo </Link>
        <Link to="/Calculator" className="link"> Calculator </Link>
        <Link to="/BMIcalculator" className="link"> BMIcalculator </Link>
        <Link to="/Weather" className="link"> Weather </Link>
        <Link to="/PassGenerator" className="link"> PassGenerator </Link>
        <Link to="/Quiz" className="link"> Quiz </Link>
        <Link to="/TicTacToe" className="link"> TicTacToe </Link>
        <Link to="/Clicker" className="link"> Clicker </Link>
        <Link to="/Memebot" className="link"> Memebot </Link>
        <Link to="/Darkmode" className="link"> Darkmode </Link>
        <div className="github">
          <a href="https://github.com/xcvrys/react-first" target="_blank" rel="noreferrer">
            source code
          </a>
        </div>
      </nav>
    </>
  )
}