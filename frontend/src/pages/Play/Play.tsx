import { useState, useEffect } from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer.tsx';
import { Category, Question } from '../../lib/definitions';
import { getCategories, getQuestions } from '../../services/opentdb';
import Trivia from '../../components/Trivia/Trivia';
import PlayForm from '../../components/PlayForm/PlayForm.tsx';
import { shuffleArray } from '../../lib/functions/shuffle-array.ts';

const Play = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [currentAnswers, setCurrentAnswers] = useState<string[] | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.warn(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const fetchNewQuestions = (difficulty: string, category: number) => {
    setLoading(true);
    getQuestions(difficulty, category)
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
    if (questions && currentQuestion !== null) {
      if (currentQuestion > questions.length - 1) {
        setGameOver(true);
        setQuestions(null);
        setCurrentQuestion(null);
        setCurrentAnswers(null);
      } else {
        setCurrentAnswers(() => {
          return shuffleArray([
            questions[currentQuestion].correct_answer,
            ...questions[currentQuestion].incorrect_answers,
          ]);
        });
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
            }}
          >
            Try again
          </button>
        </>
      )}
      {!loading &&
        !error &&
        categories &&
        !questions &&
        gameOver &&
        score === null && (
          <PlayForm
            submitForm={(data) =>
              fetchNewQuestions(data.difficulty, data.category)
            }
            categories={categories}
          />
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
                setCurrentAnswers(() => {
                  return shuffleArray([
                    questions[0].correct_answer,
                    ...questions[0].incorrect_answers,
                  ]);
                });
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
        currentAnswers &&
        score !== null &&
        !gameOver && (
          <>
            <p>{score}</p>
            <Trivia
              question={questions[currentQuestion]}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              currentAnswers={currentAnswers}
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
