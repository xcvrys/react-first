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

  return (
    <div className="App">
      <Router>
        <Heder />
        <Routes>
          <Route exact path="/react-first" element={<Home />} />
          <Route exact path="/timer" element={<Timer />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/Calculator" element={<Calculator />} />
          <Route exact path="/BMIcalculator" element={<BMIcalculator />} />
          <Route exact path="/Weather" element={<Weather />} />
          <Route exact path="/PassGenerator" element={<PassGenerator />} />
          <Route exact path="/Quiz" element={<Quiz />} />
          <Route exact path="/TicTacToe" element={<TicTacToe />} />
          <Route exact path="/Clicker" element={<Clicker />} />
          <Route exact path="/Memebot" element={<Memebot />} />
          <Route exact path="/Darkmode" element={<Darkmode />} />
          <Route exact path="*" element={<h1>Page not Founmd</h1>} />
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
