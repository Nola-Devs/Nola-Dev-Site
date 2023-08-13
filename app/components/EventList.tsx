import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

import { CalendarOutlined, CompassOutlined } from "@ant-design/icons";

import { Event } from "../types/Event";

async function getData() {
  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Couldn't fetch data from server");
  }

  return res.json();
}

export default async function EventList() {
  const events: Event[] = await getData();

  return (
    <Card
      className="mt-16 max-w-xl p-4 border border-stone-300 bg-gradient-to-br from-white to-default-200 dark:from-secondary-50 dark:to-black"
      shadow="lg"
    >
      <CardHeader className="flex justify-center">
        <h1 className="text-7xl text-center text-blue-500">
          This Week In NOLA
        </h1>
      </CardHeader>
      <Divider />
      <CardBody className="gap-4">
        {events.map((e: Event, i: number) => (
          <Event event={ e } key={ i } />
        ))}
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
            <strong>{event.summary}</strong>
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
