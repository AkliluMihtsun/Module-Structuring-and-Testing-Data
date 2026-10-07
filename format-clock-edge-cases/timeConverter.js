function formatAs12HourClock(time) {
  const slicedHours = time.slice(0, 2);
  const hours = Number(slicedHours);
  const slicedMinutes = time.slice(-2);
  const minutes = Number(slicedMinutes);
  const pattern = /^\d{2}:\d{2}$/;

  if (typeof time === "string" && pattern.test(time)) {
    if (minutes < 60) {
      if (hours < 24) {
        if (hours === 0) {
          return `12:${slicedMinutes} am`;
        } else if (hours === 12) {
          return `${hours}:${slicedMinutes} pm`;
        } else if (hours > 12) {
          return `${(hours - 12).toString().padStart(2, "0")}:${slicedMinutes} pm`;
        } else {
          return `${time} am`;
        }
      }

      return `Please check your HH input must be less than 24`;
    }
    return `Please check your MM input must be less than 60`;
  }
  return `Please check your format input must be 'HH:MM'`;
}

export { formatAs12HourClock };
