
import './quiz.css';
import React from 'react'
import questions from './questions';
import Footer from '../footer/footer';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [strat, setStart] = React.useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleStartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    const quiz = document.querySelector('.quiz');
    quiz.classList.remove('red');
    quiz.classList.remove('green');
  }

  if (showScore) {
    if (score > 5) {
      console.log("You are a true fan");
      document.querySelector(".quiz").classList.add("green");
    } else {
      document.querySelector(".quiz").classList.add("red");
    }
  }

  const handleStart = () => { setStart(true) }



  return (
    <>
      <div className='quiz'>
        {strat ? (
          <>
            {showScore ? (
              <div className='score-section'>
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className='question-section'>
                  <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className='question-text' >
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className='answer-section'>
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )}
            {showScore && (
              <button className='start-quiz' onClick={handleStartQuiz}>
                Reset Quiz
              </button>
            )}
          </>
        ) : (<button onClick={handleStart}>Start</button>)}


      </div>
      <Footer />
    </>
  );
};

export default Quiz;

