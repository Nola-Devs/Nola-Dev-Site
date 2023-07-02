//fill in the mykey and calendarid into .env.local
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const FEP_CALENDAR_ID = process.env.FEP_CALENDAR_ID;

// 1) Register a project at https://code.google.com/apis/console
// 2) Generate a Simple API Access key
// 3) Ensure Calendar API is activated under services.
export default async function getData() {
  console.log('test')
  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/" +
    FEP_CALENDAR_ID +
      "/events?key=" +
      GOOGLE_API_KEY
  );
  const data = await res.json();
  return data;
}
