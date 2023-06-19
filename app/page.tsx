// import Image from 'next/image'

var mykey = "make a key for this";
var calendarid = "make a google group calendar and set it to public";

// 1) Register a project at https://code.google.com/apis/console
// 2) Generate a Simple API Access key
// 3) Ensure Calendar API is activated under services.
export default async function Home() {
  const res = await fetch(
    "'https://www.googleapis.com/calendar/v3/calendars/'" +
      calendarid +
      "/events?key=" +
      mykey
  );

  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page</h1>
      {/* <h1>{data.summary}</h1> */}
    </main>
  );
}
