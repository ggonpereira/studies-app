export const timeToSeconds = (time: string) => {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

  const hoursInSeconds = +hours * 3600;
  const minutesInSeconds = +minutes * 60;
  return hoursInSeconds + minutesInSeconds + +seconds;
};
