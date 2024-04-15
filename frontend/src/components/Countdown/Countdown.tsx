import { useEffect, useState } from 'react';

const Countdown = ({
  currentQuestion,
  setCurrentQuestion,
}: {
  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (progress < 100) {
        console.log(progress);
        setProgress(progress + 20);
        return;
      }
      if (progress === 100) {
        setProgress(0);
        setCurrentQuestion(currentQuestion + 1);
        clearInterval(timerId);
        return;
      }
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <>
      <progress value={progress} max={100}>
        {progress}
      </progress>
    </>
  );
};

export default Countdown;
