import startBreakMinutesInterval from './startBreakMinutesInterval';

export default function startFocusMinutesInterval(setMinutes) {
  let breakMinutesInterval;
  let breakMinutesTimeout;

  const focusMinutesInterval = setInterval(() => {
    setMinutes((previousMinute) => {
      if (previousMinute[1] < 9) return '0' + (parseInt(previousMinute[1]) + 1);
      return parseInt(previousMinute) + 1;
    });
  }, 1000 * 60);

  const focusMinutesTimeout = setTimeout(() => {
    clearInterval(focusMinutesInterval);
    setMinutes('00');
    const [minutesInterval, minutesTimeout] =
      startBreakMinutesInterval(setMinutes);

    breakMinutesInterval = minutesInterval;
    breakMinutesTimeout = minutesTimeout;
  }, 1000 * 60 * 49);

  return [
    focusMinutesInterval,
    focusMinutesTimeout,
    breakMinutesInterval,
    breakMinutesTimeout,
  ];
}
