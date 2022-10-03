import './clicker.css';
import React, { useState } from 'react';
import Footer from '../footer/footer';

const Clicker = () => {
  const [clicks, setClicks] = useState(0);
  const [upgrades, setUpgrades] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(10);

  const upgrade = () => {
    if (clicks >= upgradeCost) {
      setClicks(clicks - upgradeCost);
      setUpgrades(upgrades + 1);
      setUpgradeCost(upgradeCost * 2);
    }
  };

  const click = () => {
    setClicks(clicks + 1 + upgrades);
  };

  const reset = () => {
    setClicks(0);
    setUpgrades(0);
    setUpgradeCost(10);
  };


  return (
    <>
      <div className="clicker">
        <input
          type="image"
          src="https://img.icons8.com/external-nawicon-outline-color-nawicon/256/000000/external-cookie-fast-food-nawicon-outline-color-nawicon.png"
          onClick={click}
        />
        <h1>{clicks}</h1>
        <h4>Click: +{upgrades + 1}</h4>
        <div className='upgrade'>
          <button onClick={upgrade}>UPGRADE</button>
          <p>Upgrades: {upgrades}</p>
          <p>Upgrade Cost: {upgradeCost}</p>
          <span>Upgrade Clicks by 1</span>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      <Footer />
    </>
  );
};




export default Clicker;