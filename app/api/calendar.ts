//fill in the mykey and calendarid into .env.local
const mykey = process.env.mykey;
import { NextApiRequest, NextApiResponse } from 'next'
//const calendarid = process.env.calendarid;

// 1) Register a project at https://code.google.com/apis/console
// 2) Generate a Simple API Access key
// 3) Ensure Calendar API is activated under services.
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('test')
  console.log(req)
  // const res = await fetch(
  //   "https://www.googleapis.com/calendar/v3/calendars/" +
  //     calendarid +
  //     "/events?key=" +
  //     mykey
  // );
 // const data = await res.json();
  //return data;
  res.status(666).json({ text: 'Hello' });
}
