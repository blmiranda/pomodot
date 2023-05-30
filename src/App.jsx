import { useState } from 'react';
import './CSS/index.css';
import Timer from './components/Timer';
import useTimer from './hooks/useTimer';
/* import handleStart from './functions/handleStart';
import handleStop from './functions/handleStop'; */
import { handleStart, handleStop } from './functions/progress-animation';

/* const intervals = [];
const timeouts = []; */

const App = () => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [minutes, seconds] = useTimer(timerIsRunning);

  function start() {
    /* const progressCircle = document.querySelector('.progress-circle');
    const breakProgress = document.querySelector('.break-progress');
    let breakInterval; */

    setTimerIsRunning(true);
    handleStart();

    /* progressCircle.classList.add('active');

    const progressInterval = setInterval(() => {
      breakProgress.classList.remove('active');
      progressCircle.classList.add('active');
    }, 1000 * 60 * 60);

    const breakTimeout = setTimeout(() => {
      breakProgress.classList.add('active');
      progressCircle.classList.remove('active');

      breakInterval = setInterval(() => {
        breakProgress.classList.add('active');
        progressCircle.classList.remove('active');
      }, 1000 * 60 * 60);

      intervals.push(breakInterval);
    }, 1000 * 60 * 50);

    intervals.push(progressInterval);
    timeouts.push(breakTimeout); */
  }

  function stop() {
    /* const progressCircle = document.querySelector('.progress-circle');
    const breakProgress = document.querySelector('.break-progress'); */

    setTimerIsRunning(false);
    handleStop();

    /* progressCircle.classList.remove('active');
    breakProgress.classList.remove('active');

    intervals.forEach((interval) => {
      clearInterval(interval);
    });
    intervals.length = 0;

    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
    timeouts.length = 0; */
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
