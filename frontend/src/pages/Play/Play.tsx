import { useState, useEffect } from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer.tsx';
import { Question } from '../../lib/definitions';
import { getQuestions } from '../../services/opentdb';
import Trivia from '../../components/Trivia/Trivia';

const Play = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);

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
