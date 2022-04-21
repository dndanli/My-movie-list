export function formatMinutesToHoursAndMinutes(minutes:number){
  const mins = minutes % 60;
  const hours = (minutes - mins)/ 60;
  return `${hours}h ${mins}m`;
}
