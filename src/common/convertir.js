export function toHHMMSS(value) {
  const secStringToInt = parseInt(value, 10); // don't forget the second param
  let hours = Math.floor(secStringToInt / 3600);
  let minutes = Math.floor((secStringToInt - hours * 3600) / 60);
  let seconds = secStringToInt - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
}
