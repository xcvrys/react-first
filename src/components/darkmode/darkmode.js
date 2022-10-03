import React from 'react';
import './darkmode.css';
import Footer from '../footer/footer';

const Darkmode = () => {

  const [darkMode, setDarkMode] = React.useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };


  return (
    <>
      <div className="darkmode">
        <div className={darkMode ? 'darkmode__background darkmode__background--dark' : 'darkmode__background'}>
          <h1>Darkmode</h1>
          <p>Darkmode is a feature that allows you to change the color of the background and text to a darker color. This is useful for people who have trouble seeing the screen in bright light.😎</p>
        </div>
        <button onClick={handleClick} className="darkmode__button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Darkmode;