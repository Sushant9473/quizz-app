import questions from './questions';

export function fetchQuestions(difficulty, numQuestions) {
  const allQuestions = questions[difficulty];

  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());

  const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

  return Promise.resolve(selectedQuestions);
}
