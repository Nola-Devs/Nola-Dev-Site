"use client";
import { Card, CardBody } from "@nextui-org/react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

export default function Calendar() {
  return (
    <div className="flex justify-center items-center my-auto flex-col p-4 my-2">
      <Card className="max-w-7xl w-full mb-8 border border-stone-300 bg-gradient-to-br from-white to-default-200/60 dark:from-secondary-50 dark:to-black px-4 py-2">
        <EventList group="all" />
      </Card>
      <Card className="max-w-7xl w-full mb-8">
        <EventForm />
      </Card>
    </div>
  );
}
