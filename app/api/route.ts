import { NextRequest, NextResponse } from "next/server";
import { Event } from "../types/Event";
import { mockEventJSON } from "../data/events";
import { organizationsStore } from "../data/organizations";

async function fetchEvent(organization: string) {
  // Make sure it's a real organization
  if (!(organization in organizationsStore)) {
    return [];
  }

  // Make sure it has a real calendar_id
  if (
    !organizationsStore[organization].hasOwnProperty("calendar_id") ||
    organizationsStore[organization].calendar_id == ""
  ) {
    return [];
  }

  // If it's in development, just return dummy content
  // if (process.env.NODE_ENV == "development") {
  //   const mockEvents: Event[] = mockEventJSON.flatMap((item) =>
  //     item.items.map((event: any) => {
  //       return {
  //         htmlLink: event.htmlLink,
  //         summary: "FAKE " + organization + " - " + event.summary,
  //         description: event.description,
  //         location: event.location,
  //         orgEmoji: "⁉️",
  //         start: {
  //           dateTime: event.start.dateTime,
  //         },
  //         end: {
  //           dateTime: event.end.dateTime,
  //         },
  //       };
  //     })
  //   );

  //   return mockEvents;
  // }

  if (!process.env.CALENDAR_KEY) {
    throw new Error("CALENDAR_KEY is not set");
  }

  const today = new Date();

  // 3 weeks
  // |-----|------|-----|
  //   ^ today

  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());

  const end = new Date(today);
  end.setDate(today.getDate() + (6 - today.getDay()) + 14);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${
    organizationsStore[organization].calendar_id
  }/events?maxResults=10&timeMax=${end.toISOString()}&timeMin=${start.toISOString()}&singleEvents=true&showDeleted=false&key=${
    process.env.CALENDAR_KEY
  }`;

  const e = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const event = (await e.json())["items"];

  if (event == null) {
    return [];
  }

  const events: Event[] = event.map((e: any) => {
    return {
      htmlLink: e.htmlLink,
      summary: e.summary,
      description: e.description,
      location: e.location,
      orgEmoji: organizationsStore[organization].icon,
      start: {
        dateTime: e.start.dateTime,
      },
      end: {
        dateTime: e.end.dateTime,
      },
    };
  });

  return events;
}

// Fetch data depending on ?group=
export async function GET(req: NextRequest) {
  // If ?group=_ is not set, just return default all data
  const org = req.nextUrl.searchParams.get("group");

  if (org && org != "all") {
    return NextResponse.json(await fetchEvent(org), {
      status: 200,
    });
  }

  const events: Event[] = (
    await Promise.all(Object.keys(organizationsStore).map(fetchEvent))
  ).flat();

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
      embeds: [
        {
          color: 11730954,
          fields: [
            {
              name: "Email",
              value: data.email,
            },
            {
              name: "Name",
              value: data.name,
            },
            {
              name: "Organization",
              value: data.organization,
            },
            {
              name: "Event",
              value: data.event,
            },
            {
              name: "Location",
              value: data.location,
            },
            {
              name: "Link",
              value: data.link,
            },
            {
              name: "Date",
              value: data.date,
            },
            {
              name: "Time Start",
              value: data.startTime,
            },
            {
              name: "Time End",
              value: data.endTime,
            },
            {
              name: "Description",
              value: data.description,
            },
          ],
        },
      ],
    }),
  });

  return NextResponse.json("sent", {
    status: 200,
  });
}
