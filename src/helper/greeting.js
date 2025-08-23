export function getGreetingByIST() {
  const date = new Date();

  // IST is UTC +5:30
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const hours = istDate.getHours();

  if (hours >= 5 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else if (hours >= 17 && hours < 24) {
    return "Good Evening";
  }
}
