export default function startSecondsInterval(setSeconds) {
  const secondsInterval = setInterval(() => {
    setSeconds((previousSecond) => {
      if (previousSecond === 59) return '00';
      if (previousSecond[1] < 9) return '0' + (parseInt(previousSecond[1]) + 1);

      return parseInt(previousSecond) + 1;
    });
  }, 1000);

  return secondsInterval;
}
