import React from 'react';
import './memebot.css';
import Footer from '../footer/footer';

const Memebot = () => {
  const [joke, setJoke] = React.useState('');
  const [jokeImg, setJokeImg] = React.useState('');

  const getJoke = () => {
    fetch('https://meme-api.herokuapp.com/gimme')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.title);
        setJokeImg(data.url);
      });
  };

  return (
    <>
      <div className="memebot">
        <div className="memebot__background">
          <h1>memebot</h1>
          <div className="memebot__result">
            {jokeImg && <img src={jokeImg} alt="joke" />}
            {joke && <p>{joke}</p>}
          </div>
          <button onClick={getJoke}>Get Meme</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Memebot;