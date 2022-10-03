import './timer.css';
import React, { useState, useEffect } from 'react';
import Footer from '../footer/footer';

const Timer = () => {
  // I know sbout second and miliseconds but i prefere minutes and seconds😎
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);
  let [state, setState] = useState(0);

  useEffect(() => {
    if (minutes === 60) {
      setStart(false);
      setMinutes(0);
      setSeconds(-1);

      alert('🎉YOU WIN!🎉');
    }
  }, [minutes]);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 10);
    } else if (!start) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  const remember = () => {
    state = minutes + ":" + seconds;
    setState(state);
  };

  const SetRemember = () => {
    setState(0);
  };

  return (
    <>
      <div className="timer">
        <div className="timer__time">
          <h1>{minutes}:{seconds}</h1>
          <p onClick={() => SetRemember()}>{state}</p>
        </div>
        <div className="timer__buttons">
          <button onClick={() => setStart(true)}>Start</button>
          <button onClick={() => setStart(false)}>Stop</button>
          <button onClick={() => { setSeconds(0); setMinutes(0); }}>Reset</button>
          <button onClick={() => remember()}>Remember</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Timer;