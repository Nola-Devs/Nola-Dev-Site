import { NextResponse } from "next/server";
import { Event } from "../types/Event";
import { mockEventJSON } from "../data/events";

import { calendar_v3 } from "@googleapis/calendar";

let cal: calendar_v3.Calendar;

if (process.env.NODE_ENV == "production") {
  cal = new calendar_v3.Calendar({ auth: process.env.CALENDAR_KEY });
}

// Get the latest week
export async function GET(_: Request) {
  if (process.env.NODE_ENV == "development") {
    const mockEvents: Event[] = mockEventJSON.flatMap((item) =>
      item.items.map((event: any) => {
        return {
          htmlLink: event.htmlLink,
          summary: event.summary,
          description: event.description,
          location: event.location,
          start: {
            dateTime: event.start.dateTime,
          },
          end: {
            dateTime: event.end.dateTime,
          },
        };
      })
    );

    return NextResponse.json(mockEvents, {
      status: 200,
    });
  }

  if (!process.env.CALENDAR_KEY) {
    throw new Error("CALENDAR_KEY is not set");
  }

  const calendarIds = [
    // Hacknight
    "d2ce13d5608aebe0ff7d3bcec5ea581fea8ca24d66e5f65c112e8cc3dabdbec1@group.calendar.google.com",
    // Agile Nola
    "d8aef47c1895abb3176ad34577de3c97f1adea91da2169a65e1e1b1c28c56e1c@group.calendar.google.com",
    // Below C Level
    "4a4247e11b25fdce675a32da7252fba0ce728f6ae0ec47616f2de033592e85c9@group.calendar.google.com",
    // Front End Party
    "1c23d7fe14840e320ec0762245bf55cc32a6910417fcf76ca8ba2d1a308110f3@group.calendar.google.com",
    // New Orleans Game Developers
    "c_817psp5emlgh8vgg432udrtv20@group.calendar.google.com",
  ];

  // Get first and last day of week
  const today = new Date();

  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());

  const end = new Date(today);
  end.setDate(today.getDate() + (6 - today.getDay()));

  const calendarEvents = await Promise.all(
    calendarIds.map(async (id) => {
      return cal.events
        .list({
          calendarId: id,
          maxResults: 10,
          timeMax: end.toISOString(),
          timeMin: start.toISOString(),
          singleEvents: true, // Include automatically-repeating events
          showDeleted: false,
        })
        .then((res) => {
          return res.data.items;
        });
    })
  );

  const events: Event[] = calendarEvents
    .filter((e) => e !== undefined && e !== null)
    .flatMap((item) =>
      item!.map((event: any) => {
        return {
          htmlLink: event.htmlLink,
          summary: event.organizer.displayName + "\n" + event.summary,
          description: event.description,
          location: event.location,
          start: {
            dateTime: event.start.dateTime,
          },
          end: {
            dateTime: event.end.dateTime,
          },
        };
      })
    );

  return NextResponse.json(events, {
    status: 200,
  });
}
export async function POST(req: Request) {

  const data = await req.json();
  const webHookURL: string = process.env["DISCORD_WEBHOOK"] || "";
  const sendData = await fetch(webHookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Event Bot",
        // the avatar to be displayed
        // avatar_url: "https://sgpoppers.com/wp-content/uploads/2018/05/originalrush.png",
        //content: "@all @everyone",
        embeds: [{
        color: 11730954,
        fields: [{
            name: "Email",
            value: data.email,
          },{
            name: "Name",
            value: data.name,
          },{
            name: "Organization",
            value: data.organization,
          },{
            name: "Event",
            value: data.event,
          },{
            name: "Location",
            value: data.location,
          },{
            name: "Link",
            value: data.link,
          },{
            name: "Date",
            value: data.date,
          },{
            name: "Time Start",
            value: data.startTime,
          },{
            name: "Time End",
            value: data.endTime,
          }, {
            name: "Description",
            value: data.description,
          }],
      }],
    }),
  });

  return NextResponse.json( "sent" , {
    status: 200
  });
}
