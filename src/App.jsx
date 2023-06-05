import { useState } from 'react';
import './CSS/index.css';
import Timer from './components/Timer';
import ProgressCircle from './components/ProgressCircle';
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
      <ProgressCircle />

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
