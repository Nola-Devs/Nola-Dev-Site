"use client";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

import GithubOutlined from "@ant-design/icons/GithubOutlined";
import MessageOutlined from "@ant-design/icons/MessageOutlined";

import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-start p-4 my-2">
      <Card isBlurred className="mt-16 max-w-md p-4 border border-stone-300 bg-gradient-to-br from-white to-default-200 dark:from-secondary-50 dark:to-black" shadow="lg">
        <CardHeader className="flex justify-center">
          <h1 className="text-7xl text-center text-blue-500">NOLA Devs</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-justify">
            Welcome to Nola Devs, a vibrant and inclusive software developers
            group nestled in the heart of New Orleans! Immerse yourself in a
            community brimming with passionate developers, all driven by the
            shared values of collaboration, learning, and personal growth.
            Whether you&apos;re a seasoned professional or just starting your
            coding journey, our group offers the perfect platform to connect
            with like-minded individuals who share your excitement for all things
            software development. Here, we hope to facilitate the opportunity
            to expand your skills, forge valuable connections, and leave
            a lasting impact on the ever-evolving world of software
            development. Come see what&apos;s happening in our flourishing
            tech-talent ecosystem!
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            isBlock
            color="secondary"
            size="lg"
            href={ "https://github.com/nola-devs" }
            target="_blank"
          >
            <GithubOutlined />
          </Link>
          <Link
            isExternal
            isBlock
            color="secondary"
            size="lg"
            href={ "https://discord.com/invite/bvrS72gaKS" }
            target="_blank"
          >
            <MessageOutlined />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
