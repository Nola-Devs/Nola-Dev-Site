"use client";
import { Card, CardBody } from "@nextui-org/react";
import EventForm from "../components/EventForm";

export default function Calendar() {
  return (
    <div className="flex justify-center items-center my-auto flex-col">
      <Card shadow="lg" className="my-10 w-full max-w-7xl border border-stone-300">
        <CardBody>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=ZDhhZWY0N2MxODk1YWJiMzE3NmFkMzQ1NzdkZTNjOTdmMWFkZWE5MWRhMjE2OWE2NWUxZTFiMWMyOGM1NmUxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NGE0MjQ3ZTExYjI1ZmRjZTY3NWEzMmRhNzI1MmZiYTBjZTcyOGY2YWUwZWM0NzYxNmYyZGUwMzM1OTJlODVjOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MWMyM2Q3ZmUxNDg0MGUzMjBlYzA3NjIyNDViZjU1Y2MzMmE2OTEwNDE3ZmNmNzZjYThiYTJkMWEzMDgxMTBmM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJjZTEzZDU2MDhhZWJlMGZmN2QzYmNlYzVlYTU4MWZlYThjYTI0ZDY2ZTVmNjVjMTEyZThjYzNkYWJkYmVjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y184MTdwc3A1ZW1sZ2g4dmdnNDMydWRydHYyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZGdhc3BhcmRAZ21haWwuY29t&src=c3FscGFzc2JyQGdtYWlsLmNvbQ&color=%238E24AA&color=%23795548&color=%23EF6C00&color=%234285F4&color=%23616161&color=%239E69AF&color=%23A79B8E" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"'
            width="100%"
            height="700"
          />
        </CardBody>
      </Card>
      <Card className="max-w-7xl w-full mb-8">
        <EventForm />
      </Card>
    </div>
  );
}

