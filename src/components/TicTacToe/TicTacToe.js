
import React, { useState } from 'react';
import './TicTacToe.css';
import Footer from '../footer/footer';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
  const [draw, setdraw] = useState();

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        } else if (!squares.includes('')) {
          setdraw(true);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== '') {
      alert('already clicked');
      return;
    }

    let squares = [...cells];

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setdraw(null);
    setCells(Array(9).fill(''));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)} >{cells[num]}</td>;
  };

  const renderCells = () => {
    let rows = [];
    let cellCounter = 0;

    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<Cell num={cellCounter} />);
        cellCounter++;
      }
      rows.push(<tr>{row}</tr>);
    }
    return rows;
  };

  if (winner) {
    return (
      <div className="TicTacToe">
        <h1 className='Winner'>{winner} Wins🎉</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  } else if (draw) {
    return (
      <div className="TicTacToe">
        <h1 className='Draw'>It's a Draw!</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }

  return (
    <>
      <div className='TicTacToe'>
        <p>{turn} Turn</p>
        <table>
          <tbody>
            {renderCells()}
          </tbody>
        </table>
      </div >
      <Footer />
    </>
  );
};

export default TicTacToe;