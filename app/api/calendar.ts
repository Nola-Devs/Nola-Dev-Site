//fill in the mykey and calendarid into .env.local
const mykey = process.env.mykey;
const calendarid = process.env.calendarid;

// 1) Register a project at https://code.google.com/apis/console
// 2) Generate a Simple API Access key
// 3) Ensure Calendar API is activated under services.
export default async function getData() {
  console.log('test')
  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      calendarid +
      "/events?key=" +
      mykey
  );
  const data = await res.json();
  return data;
}
