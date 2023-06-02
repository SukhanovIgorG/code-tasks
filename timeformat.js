function formatDuration(time) {
  const years = Math.floor(Math.floor(Math.floor(time / (60 * 60)) / 24) / 365);
  const days = Math.floor(Math.floor(time / (60 * 60)) / 24) % 365;
  const hours = Math.floor(time / (60 * 60)) % 24;
  const minutes = Math.floor(time / 60) == 0 ? 0 : Math.floor(time / 60) % 60;
  const seconds = time % 60 < 60 ? time % 60 : time;
  const yearsName = years == 1 ? ' year' : ' years';
  const daysName = days == 1 ? ' day' : ' days';
  const hoursName = hours == 1 ? ' hour' : ' hours';
  const minutesName = minutes == 1 ? ' minute' : ' minutes';
  const secondsName = seconds == 1 ? ' second' : ' seconds';
  const comaY = days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? ',' : '';
  const comaD = hours > 0 || minutes > 0 || seconds > 0 ? ',' : '';
  const comaH =
    minutes > 0 && seconds > 0
      ? ','
      : (minutes > 0 && !seconds > 0) || (!minutes > 0 && seconds > 0)
      ? ' and'
      : '';
  const comaM = seconds > 0 ? ' and' : '';
  const preSecondsName =
    years > 0 || days > 0 || hours > 0 || minutes > 0 ? ' and ' : '';

  let answer =
    time != 0
      ? `${years == 0 ? '' : ' ' + years + yearsName + comaY}${
          days == 0 ? '' : ' ' + days + daysName + comaD
        }${hours == 0 ? '' : ' ' + hours + hoursName + comaH}${
          minutes == 0 ? '' : ' ' + minutes + minutesName + comaM
        }${seconds == 0 ? '' : ' ' + seconds + secondsName}`
      : 'now';
  answer = answer.trim().replace(', and', ' and');
  return answer;
}

console.log('formatDuration :>> ', formatDuration(60 * 60 * 2 + 65));
console.log('formatDuration :>> ', formatDuration(62));
console.log('formatDuration :>> ', formatDuration(120));
