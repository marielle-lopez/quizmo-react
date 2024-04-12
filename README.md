# Quizmo

## Changelog

### 12 April 2024

- Started fetching data from OpenTDB API for available categories
  - Added a dropdown with fetched categories as options
- Created `Difficulty` enum for available difficulties
  - Added a dropdown with values of `Difficulty` enum as selectable options

### 11 April 2024

- Set up default React application with Vite
- Installed Vitest for unit and component testing, React Router DOM to handle routing, and Tailwind CSS for styling
- Started fetching data from Open Trivia DB (OpenTDB) API for questions
- Created `decodeHtmlEntities()` to replace HTML entities in a given string, and also constructed corresponding unit test
- Created `shuffleArray()` which sorts the elements of a given array in a random manner using the [Fisher-Yates sorting algorithm](https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/)
- Play page allows user to start a game, answer questions, and stores user's score, but also play another game after completing one
- Added `loading` and `error` states to provide feedback to the user on processes that take time
- Questions are now timed; users have 5 seconds to answer each question

One of the things I noticed was HTML entities existing within questions. I constructed the `decodeHtmlEntities()` function to help with this. I installed the [html-entities](https://www.npmjs.com/package/html-entities) package, which takes an array of HTML entities and returns another array of their corresponding symbol.

As with many fetch requests, not every single one will be successful. So, in order to communicate this to the user, I'll need to display some sort of message. Offering an opportunity to the user to retry fetching or automatically doing it for the user would be a case of improving UX.
