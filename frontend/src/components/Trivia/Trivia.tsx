import { useEffect, useState } from 'react';
import { Question } from '../../lib/definitions';
import { decodeHtmlEntities } from '../../lib/functions/decode-html-entities';
import Countdown from '../Countdown/Countdown';

const Trivia = ({
  question,
  currentQuestion,
  setCurrentQuestion,
  currentAnswers,
  score,
  setScore,
}: {
  question: Question;
  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;
  currentAnswers: string[];
  score: number;
  setScore: (score: number) => void;
}) => {
  const [progress, setProgress] = useState<number>(0);

  let timer: any;

  useEffect(() => {
    timer = setInterval(() => {
      if (progress < 100) {
        console.log(progress);
        setProgress(progress + 20);
        return;
      }
      if (progress === 100) {
        setProgress(0);
        setCurrentQuestion(currentQuestion + 1);
        clearInterval(timer);
        return;
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <p>{decodeHtmlEntities(question.question)}</p>
      {currentAnswers.map((answer) => (
        <button
          key={answer}
          onClick={() => {
            clearInterval(timer);
            setProgress(0);
            decodeHtmlEntities(answer) ===
              decodeHtmlEntities(question.correct_answer) &&
              setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {decodeHtmlEntities(answer)}
        </button>
      ))}
      <div>
        <Countdown progress={progress} />
      </div>
    </div>
  );
};

export default Trivia;
