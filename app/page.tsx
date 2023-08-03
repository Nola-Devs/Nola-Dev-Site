"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card isBlurred className="m-0 max-w-md sm:m-5" shadow="lg">
        <CardHeader className="flex justify-center">
          <h1 className="text-7xl text-center text-blue-500">NOLA Devs</h1>
        </CardHeader>
        <CardBody>
          <p>
            Welcome to Nola Devs, a vibrant and inclusive software developers
            group nestled in the heart of New Orleans! Immerse yourself in a
            community brimming with passionate developers, all driven by the
            shared values of collaboration, learning, and personal growth.
            Whether you&apos;re a seasoned professional or just starting your
            coding journey, our group offers the perfect platform to connect
            with like-minded individuals who share your zeal for all things
            software development. By joining us, you&apos;ll have the incredible
            opportunity to expand your skills, forge valuable connections, and
            leave a lasting impact on the ever-evolving world of software
            development. Embrace this exciting adventure and join Nola Devs
            today!
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
