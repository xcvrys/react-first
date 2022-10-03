

import './passgenerator.css';
import React from 'react'
import Footer from '../footer/footer';

const PassGenerator = () => {

  const [pass, setPass] = React.useState('');
  const [length, setLength] = React.useState(8);
  const [uppercase, setUppercase] = React.useState(true);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const sym = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';

    if (uppercase) {
      password += upper;
    }
    if (lowercase) {
      password += lower;
    }
    if (numbers) {
      password += num;
    }
    if (symbols) {
      password += sym;
    }

    setPass(createPassword(password));
  };

  const createPassword = (password) => {
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += password.charAt(Math.floor(Math.random() * password.length));
    }
    return pass;
  };

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleUppercase = (e) => {
    setUppercase(e.target.checked);
  };

  const handleLowercase = (e) => {
    setLowercase(e.target.checked);
  };

  const handleNumbers = (e) => {
    setNumbers(e.target.checked);
  };

  const handleSymbols = (e) => {
    setSymbols(e.target.checked);
  };

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = pass;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Password copied to clipboard');
  };




  return (
    <>
      <div className="passgenerator">
        <div className="passgenerator__container">
          <div className="passgenerator__container__title">
            <p>Generate a password</p>
          </div>
          <div className="passgenerator__container__password">
            <h2 onClick={copyToClipboard}>{pass}</h2>
          </div>
          <div className="passgenerator__container__settings">
            <div className="passgenerator__container__settings__length">
              <label htmlFor="length">Length: </label>
              <p>5</p>
              <input type="range" name="length" id="length" min="5" max="20" value={length} onChange={handleLength} />
              <p>20</p>
            </div>
            <div className="passgenerator__container__settings">
              <label htmlFor="uppercase">Uppercase letters</label>
              <input type="checkbox" name="uppercase" id="uppercase" checked={uppercase} onChange={handleUppercase} />
            </div>
            <div className="passgenerator__container__settings">
              <label htmlFor="lowercase">Lowercase letters</label>
              <input type="checkbox" name="lowercase" id="lowercase" checked={lowercase} onChange={handleLowercase} />
            </div>
            <div className="passgenerator__container__settings">
              <label htmlFor="numbers">Numbers</label>
              <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={handleNumbers} />
            </div>
            <div className="passgenerator__container__settings">
              <label htmlFor="symbols">Symbols</label>
              <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={handleSymbols} />
            </div>
          </div>
          <div className="passgenerator__container__generate">
            <button onClick={generatePassword}>Generate</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassGenerator;

