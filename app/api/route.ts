import { NextResponse } from "next/server";


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
