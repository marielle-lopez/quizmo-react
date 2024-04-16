# ![Quizmo logo](/logo-sm.png)

## Changelog

### 16 April 2024

- Created design mockup for landing page

### 15 April 2024

- Added extra error handling for different scenarios
  - For example, when too many requests to the OpenTDB API have occurred, tell the user to retry in 5 seconds
  - Another example is when there aren't enough questions for the user's selected difficulty and category combination, tell the user to select a new difficulty and/or category
- Removed React fragments in `Trivia` component wrapping `button` element
  - This was causing an error to show in the console, which was saying each element requires a `key` prop, even though each `button` element has a specified `key` prop
- Created the `Countdown` component to hold the progress bar to display the remaining time left the user has to answer shown question
  - Implemented this in the `Trivia` component
- Developed design mockup for Play page and `Navbar` component

Previously, I was confused about how to implement the `Countdown` component with the `Trivia` component. At first I made a `progress` state inside of `Trivia.tsx`; however, updating this piece of state updates the entire `Trivia` component. This causes the answers of the question to re-shuffle. To remedy this, I created a `currentAnswers` state in `Play.tsx` which would pre-emptively shuffle the answers of the current question. This `currentAnswers` state would be passed as a prop to the `Trivia` component, allowing the `progress` state to update without re-shuffling the answers of the shown question.

### 14 April 2024

- Designed and created Quizmo logo
- Installed React Hook Form and Zod packages
- Created `PlayForm` component to handle user selection for trivia difficulty and category
  - Uses React Hook Form for form submission and Zod for validation

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
