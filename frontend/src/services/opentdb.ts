export const getQuestions = async (difficulty: string, category: number) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }

  const data = await response.json();

  if (data.response_code !== 0) {
    if (data.response_code === 1) {
      throw new Error(
        `Could not return results. The API does not have enough questions for your difficulty and category combination. Please select a new difficulty/category.`
      );
    }
    if (data.response_code === 5) {
      throw new Error(
        'Too many requests to the API have occurred. Please try again in 5 seconds.'
      );
    }
  }

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
