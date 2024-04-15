const Countdown = ({ progress }: { progress: number }) => {
  return (
    <>
      <progress value={progress} max={100}>
        {progress}
      </progress>
    </>
  );
};

export default Countdown;
