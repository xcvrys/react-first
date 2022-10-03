// creatre question list for quiz with answers and correct answer

const questions = [
  {
    id: 1,
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
  {
    id: 5,
    questionText: 'What is the capital of Poland?',
    answerOptions: [
      { answerText: 'Warsaw', isCorrect: true },
      { answerText: 'Krakow', isCorrect: false },
      { answerText: 'Gdansk', isCorrect: false },
      { answerText: 'Wroclaw', isCorrect: false },
    ],
  },
  {
    id: 6,
    questionText: 'What is the capital of Germany?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: true },
      { answerText: 'Hamburg', isCorrect: false },
      { answerText: 'Munich', isCorrect: false },
      { answerText: 'Cologne', isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: 'What is the capital of Spain?',
    answerOptions: [
      { answerText: 'Madrid', isCorrect: true },
      { answerText: 'Barcelona', isCorrect: false },
      { answerText: 'Valencia', isCorrect: false },
      { answerText: 'Seville', isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: 'What is the capital of Italy?',
    answerOptions: [
      { answerText: 'Rome', isCorrect: true },
      { answerText: 'Milan', isCorrect: false },
      { answerText: 'Naples', isCorrect: false },
      { answerText: 'Turin', isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: 'What is the capital of Greece?',
    answerOptions: [
      { answerText: 'Athens', isCorrect: true },
      { answerText: 'Thessaloniki', isCorrect: false },
      { answerText: 'Patras', isCorrect: false },
      { answerText: 'Heraklion', isCorrect: false },
    ],
  },
];

export default questions;