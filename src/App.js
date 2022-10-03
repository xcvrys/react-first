import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/home/home";
import { useEffect } from "react";
import Heder from './components/header/header.js';
import Timer from './components/timer/timer.js';
import Todo from './components/todo/todo.js';
import BMIcalculator from './components/BMIcalculator/BMIcalculator.js';
import Calculator from './components/calculator/calculator.js';
import Weather from './components/weather/weather.js';
import PassGenerator from './components/PassGenerator/PassGenerator.js';
import Quiz from './components/quiz/quiz.js';
import TicTacToe from './components/TicTacToe/TicTacToe.js';
import Clicker from './components/clicker/clicker.js';
import Memebot from './components/memebot/memebot.js';
import Darkmode from './components/darkmode/darkmode.js';


function App() {

  // const FooterRender = () => {
  //   if (window.location.pathname === "/") {
  //     return null;
  //   } else {
  //     return <Footer />
  //   }
  // }

  // useEffect(() => {
  //   FooterRender();
  // }, [])



  return (
    <div className="App">
      <Router>
        <Heder />
        <Routes>
          <Route path="/react-first" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/BMIcalculator" element={<BMIcalculator />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/PassGenerator" element={<PassGenerator />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/Clicker" element={<Clicker />} />
          <Route path="/Memebot" element={<Memebot />} />
          <Route path="/Darkmode" element={<Darkmode />} />
          <Route path="*" element={<h1>Page not Founmd</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// rafc

// import React from 'react'

// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }
