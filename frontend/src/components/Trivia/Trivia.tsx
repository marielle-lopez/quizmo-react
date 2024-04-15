import { Question } from '../../lib/definitions';
import { decodeHtmlEntities } from '../../lib/functions/decode-html-entities';
import { shuffleArray } from '../../lib/functions/shuffle-array';
// import Countdown from '../Countdown/Countdown';

const Trivia = ({
  question,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
}: {
  question: Question;
  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;
  score: number;
  setScore: (score: number) => void;
}) => {
  const shuffledAnswers = shuffleArray([
    question.correct_answer,
    ...question.incorrect_answers,
  ]);

  const timer = setTimeout(() => {
    setCurrentQuestion(currentQuestion + 1);
  }, 5000);
  return (
    <div>
      <p>{decodeHtmlEntities(question.question)}</p>
      {shuffledAnswers.map((answer) => (
        <button
          key={answer}
          onClick={() => {
            clearTimeout(timer);
            decodeHtmlEntities(answer) ===
              decodeHtmlEntities(question.correct_answer) &&
              setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {decodeHtmlEntities(answer)}
        </button>
      ))}
      {/* <div>
        <Countdown
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div> */}
    </div>
  );
};

export default Trivia;
