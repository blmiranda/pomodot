const Timer = (props) => {
  const { minutes, seconds } = props;

  return (
    <article className="timer">
      <p>
        {minutes}:{seconds}
      </p>
    </article>
  );
};

export default Timer;
