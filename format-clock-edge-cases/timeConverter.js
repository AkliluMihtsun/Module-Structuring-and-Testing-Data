function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const slicedMinutes = time.slice(-2);

  if (hours === 0) {
    return `12:${slicedMinutes} am`;
  } else if (hours > 1 && hours <= 11) {
    return `0${hours}:${slicedMinutes} am`;
  } else if (hours === 12) {
    return `12:${slicedMinutes} pm`;
  } else if (hours > 12 && hours <= 21) {
    return `0${hours - 12}:${slicedMinutes} pm`;
  } else if (hours === 22 || hours === 23) {
    return `${hours - 12}:${slicedMinutes} pm`;
  }
}

export { formatAs12HourClock };
