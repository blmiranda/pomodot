import { useState } from 'react';
import './CSS/index.css';
import Timer from './components/Timer';
import useTimer from './hooks/useTimer';
import { handleStart, handleStop } from './functions/progress-animation';

const App = () => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [minutes, seconds] = useTimer(timerIsRunning);

  function start() {
    setTimerIsRunning(true);
    handleStart();
  }

  function stop() {
    setTimerIsRunning(false);
    handleStop();
  }

  return (
    <section className="timer-wrapper">
      <svg>
        <circle r="49.45%" cx="50%" cy="50%" className="track"></circle>
        <circle
          r="49.45%"
          cx="50%"
          cy="50%"
          className="progress-circle"
        ></circle>
        <circle
          r="49.45%"
          cx="50%"
          cy="50%"
          className="break-progress"
        ></circle>
      </svg>

      <div className="inner-wrapper">
        <Timer minutes={minutes} seconds={seconds} />

        {timerIsRunning ? (
          <button className="stop-button" onClick={stop}>
            <span>stop</span>
          </button>
        ) : (
          <button className="start-button" onClick={start}>
            <span>start</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default App;
