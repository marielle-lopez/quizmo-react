import { Question } from '../../lib/definitions';
import { decodeHtmlEntities } from '../../lib/functions/decode-html-entities';
import { shuffleArray } from '../../lib/functions/shuffle-array';

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

  return (
    <div>
      <p>{decodeHtmlEntities(question.question)}</p>
      {shuffledAnswers.map((answer) => (
        <>
          <button
            key={answer}
            onClick={() => {
              answer === question.correct_answer && setScore(score + 1);
              setCurrentQuestion(currentQuestion + 1);
            }}
          >
            {answer}
          </button>
        </>
      ))}
    </div>
  );
};

export default Trivia;
