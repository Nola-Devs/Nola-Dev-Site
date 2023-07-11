"use client";
import {
  Card,
  Text,
  Image,
  useTheme,
  getDocumentTheme,
} from "@nextui-org/react";
import { url } from "inspector";
import React, { useState, useEffect } from "react";

export default async function Home() {
  // TODO call getData from the api to fetch
  // TODO fix re-render ad infitum issue
  // TODO grab type or something from theme prop to conditionally render different logos

  // const { type, isDark } = useTheme();
  // console.log("TEST:", type, isDark);
  // const { type, isDark } = useTheme();
  // const [isDark, setIsDark] = useState(false);

  // let newTheme = getDocumentTheme(document?.documentElement);

  // console.log(newTheme, isDark, setIsDark);

  return (
    <>
      <Image
        width={400}
        height={400}
        src="/logo_900x844.png"
        alt="default logo"
        css={{ mt: "1rem" }}
      />
      <Card variant="bordered" css={{ mw: "41rem", margin: "1rem auto" }}>
        <Card.Body>
          <Text>
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
          </Text>
        </Card.Body>
      </Card>
    </>
  );
}


// src={isDark ? "/logo-dark_900x844.png" : "/logo_light_900x844.png"}