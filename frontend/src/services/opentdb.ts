export const getQuestions = async () => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }

  const data = await response.json();
  return data.results;
};

export const getCategories = async () => {
  const response = await fetch(`https://opentdb.com/api_category.php`);

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await response.json();
  return data.trivia_categories;
};
