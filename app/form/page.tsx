"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function Form() {
  return (
    <div className="flex justify-center">
      <Card isBlurred className="my-12 border border-stone-300 max-w-3xl xs:w-full">
        <CardBody>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfo0x_l1rbNyLjuaJ4gJABqg6hZtSvcSVHEonIN43A4Kr9WiQ/viewform?embedded=true"
            className="w-full h-[1470px]"
          >
            Loading…
          </iframe>
        </CardBody>
      </Card>
    </div>
  );
}