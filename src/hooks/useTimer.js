import { useState, useEffect } from 'react';
import startFocusMinutesInterval from '../functions/startFocusMinutesInterval';
import startSecondsInterval from '../functions/startSecondsInterval';

export default function useTimer(timerIsRunning) {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    let allIntervals = [];
    let secondsInterval;

    if (timerIsRunning) {
      allIntervals = startFocusMinutesInterval(setMinutes);
      secondsInterval = startSecondsInterval(setSeconds);
    }

    const [
      focusMinutesInterval,
      focusMinutesTimeout,
      breakMinutesInterval,
      breakMinutesTimeout,
    ] = allIntervals;

    return () => {
      clearInterval(focusMinutesInterval);
      clearInterval(breakMinutesInterval);

      clearTimeout(focusMinutesTimeout);
      clearTimeout(breakMinutesTimeout);

      clearInterval(secondsInterval);

      setMinutes('00');
      setSeconds('00');
    };
  }, [timerIsRunning]);

  return [minutes, seconds];
}
