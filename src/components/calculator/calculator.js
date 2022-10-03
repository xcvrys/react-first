import './calculator.css';
import React from 'react'
import Footer from '../footer/footer';

const Calculator = () => {

  const [result, setResult] = React.useState('');
  const [input, setInput] = React.useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  };

  const clear = () => {
    setInput('');
    setResult('');

  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };
  // button that change -x to x in two ways
  const changeSign = () => {
    if (input.charAt(0) === '-') {
      setInput(input.substr(1));
    } else {
      setInput('-' + input);
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator__input">
          <input type="text" defaultValue={input} readOnly="readonly" />
          <input type="text" defaultValue={result} readOnly="readonly" />
        </div>
        <div className="calculator__buttons">
          <button onClick={clear} id="clear">Clear</button>
          <button onClick={changeSign} id="changeSign">&#177;</button>
          <button onClick={backspace} id="backspace">C</button>
          <button name="/" onClick={handleClick}>&#247;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&#215;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&#8722;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>&#43;</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>&#46;</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;



