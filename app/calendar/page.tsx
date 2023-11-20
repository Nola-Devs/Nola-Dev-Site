"use client";
import { Card, CardBody } from "@nextui-org/react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

export default function Calendar() {
  return (
    <div className="flex max-w-xl justify-center mx-auto mt-5 flex-col my-2">
      <Card className="max-w-7xl w-full mb-8 ">
        <EventForm />
      </Card>
    </div>
  );
}
