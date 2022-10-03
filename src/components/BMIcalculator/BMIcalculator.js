import './BMIcalculator.css';
import React from 'react'
import Footer from '../footer/footer';

const BMIcalculator = () => {

  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [bmi, setBmi] = React.useState('');

  const calculateBmi = () => {
    // height in meters
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(2));
  };


  return (
    <>
      <div className="BMIcalculator">
        <h1>BMIcalculator</h1>
        <div className="BMIcalculator__input">
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight-kg" />
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height-cm" />
          <button onClick={calculateBmi} >Calculate</button>
        </div>
        <div className="BMIcalculator__result">
          <h1>{bmi}</h1>
          {bmi >= 2 && bmi < 16 && <p>Severely Underweight</p>}
          {bmi >= 16 && bmi < 18.5 && <p>Underweight</p>}
          {bmi >= 18.5 && bmi < 25 && <p>Normal</p>}
          {bmi >= 25 && bmi < 30 && <p>Overweight</p>}
          {bmi >= 30 && bmi < 35 && <p>Obese</p>}
          {bmi >= 35 && <p>Severely Obsese</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BMIcalculator;