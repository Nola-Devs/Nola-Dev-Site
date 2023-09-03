import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { CalendarOutlined, CompassOutlined } from "@ant-design/icons";
import { Event, eventListProps } from "../types/Event";

async function getData(group: string) {
  const res = await fetch(`/api?group=${group}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Couldn't fetch data from server");
  }

  return res.json();
}

const sortEventsByDate = (a: Event, b: Event) => {
  return (
    new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime()
  );
};

export default function EventList({ group }: eventListProps) {
  const [events, setEvents] = useState<Event[]>();

  useEffect(() => {
    (async () => setEvents(await getData(group)))();
  }, [group]);

  return (
    <Card
      className="mt-16 max-w-xl p-4 border border-stone-300 bg-gradient-to-br from-white to-default-200 dark:from-secondary-50 dark:to-black w-full"
      shadow="lg"
    >
      <CardHeader className="flex justify-center">
        <h1 className="text-7xl text-center text-blue-500">Events</h1>
      </CardHeader>
      <Divider />
      <CardBody className="gap-4">
        {events?.sort(sortEventsByDate).map((e: Event, i: number) => (
          <Event event={ e } key={ i } />
        ))}

        <Card>
          <CardHeader className="justify-center">
            <strong>You&apos;ve reached the bottom!</strong>
          </CardHeader>
          <Divider />
          <CardBody className="text-center">
            Check in here again for more events!
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}

function Event({ event }: { event: Event }) {
  const [truncateDescription, setTruncateDescription] = useState<boolean>(true);
  const [truncateCard, setTruncateCard] = useState<boolean>(false);

  const maxDescriptionLength: number = 200;

  const toggleTruncateDescription = () =>
    setTruncateDescription(!truncateDescription);
  const toggleTruncateCard = () => setTruncateCard(!truncateCard);

  const truncateString = (str: string) => {
    if (str.length <= maxDescriptionLength) {
      return str;
    }

    return str.substring(0, maxDescriptionLength) + "\u2026";
  };

  const isUrl = (str: string) => {
    try {
      const _ = new URL(str);
    } catch (_) {
      return false;
    }

    return true;
  };

  return (
    <Card>
      <CardHeader>
        <button className="w-full" onClick={ toggleTruncateCard }>
          <div className="flex flex-col items-start">
            <strong>
              {event.orgEmoji} 
              {" "}
              {event.summary}
            </strong>
            {new Date(event.start.dateTime).toDateString() +
              ": " +
              new Date(event.start.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }) +
              " — " +
              new Date(event.end.dateTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </div>
        </button>
      </CardHeader>
      {truncateCard ? null : (
        <>
          <Divider />
          <CardBody className="whitespace-pre-wrap">
            <button
              className="text-justify break-words"
              onClick={ toggleTruncateDescription }
            >
              {truncateDescription
                ? truncateString(event.description || "No description")
                : event.description || "No description"}
            </button>
          </CardBody>
          <Divider />
          <CardFooter>{event.location || "Somewhere"}</CardFooter>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              isBlock
              color="secondary"
              size="lg"
              href={ event.htmlLink }
              target="_blank"
            >
              <CalendarOutlined />
            </Link>
            {event.location ? (
              <Link
                isExternal
                isBlock
                color="secondary"
                size="lg"
                href={
                  isUrl(event.location)
                    ? event.location
                    : "https://maps.google.com/maps?q=" + event.location
                }
                target="_blank"
              >
                <CompassOutlined />
              </Link>
            ) : null}
          </CardFooter>
        </>
      )}
    </Card>
  );
}
