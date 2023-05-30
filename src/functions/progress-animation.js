const intervals = [];
const timeouts = [];

export function handleStart() {
  const progressCircle = document.querySelector('.progress-circle');
  const breakProgress = document.querySelector('.break-progress');
  let breakInterval;

  progressCircle.classList.add('active');

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
  timeouts.push(breakTimeout);
}

export function handleStop() {
  const progressCircle = document.querySelector('.progress-circle');
  const breakProgress = document.querySelector('.break-progress');

  progressCircle.classList.remove('active');
  breakProgress.classList.remove('active');

  intervals.forEach((interval) => {
    clearInterval(interval);
  });
  intervals.length = 0;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });
  timeouts.length = 0;
}
