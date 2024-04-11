import { useState, useEffect } from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer';
import { Question } from '../../lib/definitions';
import { getQuestions } from '../../services/opentdb';
import Trivia from '../../components/Trivia/Trivia';

const Play = () => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  useEffect(() => {
    getQuestions()
      .then((res) => setQuestions(res))
      .catch((err) => console.warn(err.message));
  }, []);

  console.log(questions);

  return (
    <MainContainer>
      {questions && gameOver && !currentQuestion && !score && (
        <>
          <p>Ready?</p>
          <button
            onClick={() => {
              setGameOver(false);
              setCurrentQuestion(0);
            }}
          >
            Start
          </button>
        </>
      )}
      {questions &&
        currentQuestion !== null &&
        currentQuestion < questions.length &&
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
    </MainContainer>
  );
};

export default Play;
