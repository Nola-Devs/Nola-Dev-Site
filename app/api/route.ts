import { NextResponse } from "next/server";
import { Event } from "../types/Event";

const dummyJSON = [
    {
      kind: "calendar#events",
      etag: '"p33k8p7fdufao00o"',
      summary: "Hack Night",
      description: "",
      updated: "2023-08-12T00:52:17.169Z",
      timeZone: "America/Chicago",
      accessRole: "reader",
      defaultReminders: [],
      items: [
        {
          kind: "calendar#event",
          etag: '"3377322211064000"',
          id: "_8d130hhi6h232ba2611j0b9k6p2jgb9p68qj4b9o8csjgg9o88pk8h9g68",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=XzhkMTMwaGhpNmgyMzJiYTI2MTFqMGI5azZwMmpnYjlwNjhxajRiOW84Y3NqZ2c5bzg4cGs4aDlnNjggZDJjZTEzZDU2MDhhZWJlMGZmN2QzYmNlYzVlYTU4MWZlYThjYTI0ZDY2ZTVmNjVjMTEyZThjYzNkYWJkYmVjMUBn",
          created: "2023-07-06T16:31:45.000Z",
          updated: "2023-07-06T16:31:45.532Z",
          summary: "Hack Night",
          description:
            "New Orleans Hack Night occurs around 7pm every Tuesday at The Rusty Nail. It's an unstructured, social meetup with no organizers and no agenda.\n\nJoin the Nola Devs Slack for more information. Feel free to ask questions about Hack Night in the #hacknight channel.\n\nWe typically convene on the street. If it's raining we may be inside or in the courtyard. We'll do our best to notice and greet you, but there is no hack night uniform. So if you see a group of nerds arguing in the street just ask \"Is this Hack Night?\" and they will greet you and introduce you to people.",
          location:
            "Rusty Nail\n1100 Constance St, New Orleans, LA  70130, United States",
          creator: {
            email: "a@gmail.com",
          },
          organizer: {
            email:
              "d2ce13d5608aebe0ff7d3bcec5ea581fea8ca24d66e5f65c112e8cc3dabdbec1@group.calendar.google.com",
            displayName: "Hack Night",
            self: true,
          },
          start: {
            dateTime: "2023-07-11T19:00:00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime: "2023-07-11T22:00:00-05:00",
            timeZone: "America/Chicago",
          },
          iCalUID: "CB0F24D1-B0C0-46E8-9252-8C98A8B3DE02",
          sequence: 1,
          eventType: "default",
        },
      ],
    },
    {
      kind: "calendar#events",
      etag: '"p33kc3n46rm9o00o"',
      summary: "Below C Level",
      description: "",
      updated: "2023-07-16T17:14:33.889Z",
      timeZone: "America/Chicago",
      accessRole: "reader",
      defaultReminders: [],
      items: [
        {
          kind: "calendar#event",
          etag: '"3379055293140000"',
          id: "6c6ug12idrtavp9uf2g41psquo",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=NmM2dWcxMmlkcnRhdnA5dWYyZzQxcHNxdW8gNGE0MjQ3ZTExYjI1ZmRjZTY3NWEzMmRhNzI1MmZiYTBjZTcyOGY2YWUwZWM0NzYxNmYyZGUwMzM1OTJlODVjOUBn",
          created: "2023-07-16T17:12:33.000Z",
          updated: "2023-07-16T17:14:06.570Z",
          summary: "Below C Level",
          location:
            "The Shop At the CAC, 900 Camp St 3rd floor, New Orleans, LA 70130, USA",
          creator: {
            email: "a@gmail.com",
          },
          organizer: {
            email:
              "4a4247e11b25fdce675a32da7252fba0ce728f6ae0ec47616f2de033592e85c9@group.calendar.google.com",
            displayName: "Below C Level",
            self: true,
          },
          start: {
            dateTime: "2023-07-18T18:00:00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime: "2023-07-18T19:30:00-05:00",
            timeZone: "America/Chicago",
          },
          iCalUID: "6c6ug12idrtavp9uf2g41psquo@google.com",
          sequence: 0,
          eventType: "default",
        },
        {
          kind: "calendar#event",
          etag: '"3379055347778000"',
          id: "393r8cdip9pt24qfp7rii6dqj7_20230801T230000Z",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=MzkzcjhjZGlwOXB0MjRxZnA3cmlpNmRxajdfMjAyMzA4MDFUMjMwMDAwWiA0YTQyNDdlMTFiMjVmZGNlNjc1YTMyZGE3MjUyZmJhMGNlNzI4ZjZhZTBlYzQ3NjE2ZjJkZTAzMzU5MmU4NWM5QGc",
          created: "2023-07-16T17:14:33.000Z",
          updated: "2023-07-16T17:14:33.889Z",
          summary: "Below C Level",
          location:
            "The Shop At the CAC, 900 Camp St 3rd floor, New Orleans, LA 70130, USA",
          creator: {
            email: "a@gmail.com",
          },
          organizer: {
            email:
              "4a4247e11b25fdce675a32da7252fba0ce728f6ae0ec47616f2de033592e85c9@group.calendar.google.com",
            displayName: "Below C Level",
            self: true,
          },
          start: {
            dateTime: "2023-08-01T18:00:00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime: "2023-08-01T19:45:00-05:00",
            timeZone: "America/Chicago",
          },
          recurringEventId: "393r8cdip9pt24qfp7rii6dqj7",
          originalStartTime: {
            dateTime: "2023-08-01T18:00:00-05:00",
            timeZone: "America/Chicago",
          },
          iCalUID: "393r8cdip9pt24qfp7rii6dqj7@google.com",
          sequence: 0,
          eventType: "default",
        },
      ],
    },
    {
      kind: "calendar#events",
      etag: '"p33gffp7gkn8800o"',
      summary: "NOGD Events",
      description:
        "Calendar of events for the New Orleans Game Developer Community",
      updated: "2023-08-09T19:20:07.980Z",
      timeZone: "America/Chicago",
      accessRole: "reader",
      defaultReminders: [],
      nextPageToken:
        "EjYKK25tbXVpN2J0cjJoNXVxcGdwbTAzMHRqbmtwXzIwMjMwODE3VDAwMzAwMFoYgLyZkvXhgAMiBwgFEPfKtDY=",
      items: [
        {
          kind: "calendar#event",
          etag: '"3383181570646000"',
          id: "1t6ian0r9kg4v6ruoog37df6js_20230719T000000Z",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=MXQ2aWFuMHI5a2c0djZydW9vZzM3ZGY2anNfMjAyMzA3MTlUMDAwMDAwWiBjXzgxN3BzcDVlbWxnaDh2Z2c0MzJ1ZHJ0djIwQGc",
          created: "2021-03-25T21:39:51.000Z",
          updated: "2023-08-09T14:19:45.323Z",
          summary: "Hack Night ",
          description:
            'Join the fun on discord&nbsp;\u003cbr\u003e\u003ca href="http://discord.gg/A2Ngs4w" id="ow3188" __is_owner="true"\u003ehttp://discord.gg/A2Ngs4w\u003c/a\u003e',
          location: "http://discord.gg/A2Ngs4w",
          creator: {
            email: "a@neworleansgamedev.com",
          },
          organizer: {
            email: "c_817psp5emlgh8vgg432udrtv20@group.calendar.google.com",
            displayName: "NOGD Events",
            self: true,
          },
          start: {
            dateTime: "2023-07-18T19:00:00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime: "2023-07-18T21:00:00-05:00",
            timeZone: "America/Chicago",
          },
          recurringEventId: "1t6ian0r9kg4v6ruoog37df6js_R20230315T000000",
          originalStartTime: {
            dateTime: "2023-07-18T19:00:00-05:00",
            timeZone: "America/Chicago",
          },
          iCalUID: "1t6ian0r9kg4v6ruoog37df6js_R20230315T000000@google.com",
          sequence: 0,
          extendedProperties: {
            private: {
              "X-MOZ-LASTACK": "20230815T225900Z",
            },
          },
          eventType: "default",
        },
        {
          kind: "calendar#event",
          etag: '"3383036282414000"',
          id: "nmmui7btr2h5uqpgpm030tjnkp_20230720T003000Z",
          status: "confirmed",
          htmlLink:
            "https://www.google.com/calendar/event?eid=bm1tdWk3YnRyMmg1dXFwZ3BtMDMwdGpua3BfMjAyMzA3MjBUMDAzMDAwWiBjXzgxN3BzcDVlbWxnaDh2Z2c0MzJ1ZHJ0djIwQGc",
          created: "2022-11-06T17:37:22.000Z",
          updated: "2023-08-08T18:09:01.207Z",
          summary: "SHO' & TELL",
          description:
            "It is time to Show and Tell!, hosted tonight by @thechamber69 grab the hdmi cable and show off what you've been up to! What you're working on isn't digital? WHO CARES, come by and show it off anyways!\u003cbr /\u003e\u003cbr /\u003e\u003cbr /\u003e\u003cbr /\u003eStarts at 7:30pm, hosted at Sea Cave, 3000 St. Claude.",
          location: "Sea Cave, 3000 St Claude Ave, New Orleans, LA 70117, USA",
          creator: {
            email: "a@neworleansgamedev.com",
          },
          organizer: {
            email: "c_817psp5emlgh8vgg432udrtv20@group.calendar.google.com",
            displayName: "NOGD Events",
            self: true,
          },
          start: {
            dateTime: "2023-07-19T19:30:00-05:00",
            timeZone: "America/Chicago",
          },
          end: {
            dateTime: "2023-07-19T21:00:00-05:00",
            timeZone: "America/Chicago",
          },
          recurringEventId: "nmmui7btr2h5uqpgpm030tjnkp",
          originalStartTime: {
            dateTime: "2023-07-19T19:30:00-05:00",
            timeZone: "America/Chicago",
          },
          iCalUID: "nmmui7btr2h5uqpgpm030tjnkp@google.com",
          sequence: 3,
          extendedProperties: {
            private: {
              "X-MOZ-LASTACK": "20230816T232900Z",
            },
          },
          eventType: "default",
        },
      ],
    },
  ];

// Get the latest week
export async function GET(_: Request) {

  if (process.env.NODE_ENV == "development") {

    const dummyEvents: Event[] = dummyJSON.flatMap((item) =>
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

    return NextResponse.json(dummyEvents, {
      status: 200,
    });
  }

  if (!process.env.CALENDAR_KEY) {
    return Error("CALENDAR_KEY is not set");
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

  const today = new Date();

  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());

  const end = new Date(today);
  end.setDate(today.getDate() + (6 - today.getDay()));

  const calendarResponses: Response[] = await Promise.all(
    calendarIds.map(async (id) => {
      return await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${id}/events&singleEvents=true&timeMax=${end.toISOString()}&timeMin=${start.toISOString()}&key=${
          process.env.CALENDAR_KEY
        }`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
    })
  );

  const calendarEvents: { items: Event[] }[] = await Promise.all(
    calendarResponses.map(async (res: Response) => {
      if (!res.ok) {
        return null;
      }

      const jsonResponse = await res.json();

      return jsonResponse.items;
    })
  );

  const events: Event[] = calendarEvents.flatMap((item) =>
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

  return NextResponse.json(
    { json: events },
    {
      status: 200,
    }
  );
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
