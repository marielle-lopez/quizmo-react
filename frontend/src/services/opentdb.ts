export const getQuestions = async () => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }

  const data = await response.json();
  return data.results;
};
