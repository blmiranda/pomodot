import startFocusMinutesInterval from './startFocusMinutesInterval';

export default function startBreakMinutesInterval(setMinutes) {
  const breakMinutesInterval = setInterval(() => {
    setMinutes((previousMinute) => {
      return '0' + (parseInt(previousMinute[1]) + 1);
    });
  }, 1000 * 60);

  const breakMinutesTimeout = setTimeout(() => {
    clearInterval(breakMinutesInterval);
    setMinutes('00');
    startFocusMinutesInterval(setMinutes);
  }, 1000 * 60 * 10);

  return [breakMinutesInterval, breakMinutesTimeout];
}
