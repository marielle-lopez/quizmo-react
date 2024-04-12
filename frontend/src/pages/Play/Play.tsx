import { useState, useEffect } from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer.tsx';
import { Category, Question } from '../../lib/definitions';
import { getCategories, getQuestions } from '../../services/opentdb';
import Trivia from '../../components/Trivia/Trivia';
import { Difficulty } from '../../lib/enums.ts';

const Play = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((err) => {
        console.warn(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const fetchNewQuestions = () => {
    setLoading(true);
    getQuestions()
      .then((res) => {
        setQuestions(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewQuestions();
  }, []);

  useEffect(() => {
    if (questions && currentQuestion !== null) {
      if (currentQuestion > questions.length - 1) {
        setGameOver(true);
        setQuestions(null);
        setCurrentQuestion(null);
      }
    }
  }, [currentQuestion]);

  return (
    <MainContainer>
      {loading && <p>Loading...</p>}
      {error && !loading && (
        <>
          <p>{error}</p>
          <button
            onClick={() => {
              setError(null);
              fetchNewQuestions();
            }}
          >
            Try again
          </button>
        </>
      )}
      {!loading && !error && categories && (
        <>
          <select>
            {Object.values(Difficulty)
              .filter((difficulty) => typeof difficulty === 'string')
              .map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
          </select>
          <select>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </>
      )}
      {!loading &&
        !error &&
        questions &&
        gameOver &&
        !currentQuestion &&
        !score && (
          <>
            <p>Ready?</p>
            <button
              onClick={() => {
                setGameOver(false);
                setScore(0);
                setCurrentQuestion(0);
              }}
            >
              Start
            </button>
          </>
        )}
      {!loading &&
        !error &&
        questions &&
        currentQuestion !== null &&
        currentQuestion < questions.length &&
        score !== null &&
        !gameOver && (
          <>
            <p>{score}</p>
            <Trivia
              question={questions[currentQuestion]}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              score={score}
              setScore={setScore}
            />
          </>
        )}
      {!loading && !error && gameOver && score !== null && (
        <>
          <p>Game over!</p>
          <p>{score}</p>
          <button
            onClick={() => {
              fetchNewQuestions();
              setScore(null);
            }}
          >
            Play again
          </button>
        </>
      )}
    </MainContainer>
  );
};

export default Play;
