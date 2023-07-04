"use client";
import { Card, Text } from "@nextui-org/react";


export default async function Home() {
  //call getData from the api to fetch
  return (
    <Card variant='bordered' css={{ mw: "600px", margin: "50px auto" }}>
      <Card.Body>
        <Text>
          Welcome to Nola Devs, a vibrant and inclusive software developers
          group nestled in the heart of New Orleans! Immerse yourself in a
          community brimming with passionate developers, all driven by the
          shared values of collaboration, learning, and personal growth. Whether
          you're a seasoned professional or just starting your coding journey,
          our group offers the perfect platform to connect with like-minded
          individuals who share your zeal for all things software development.
          By joining us, you'll have the incredible opportunity to expand your
          skills, forge valuable connections, and leave a lasting impact on the
          ever-evolving world of software development. Embrace this exciting
          adventure and join Nola Devs today!
        </Text>
      </Card.Body>
    </Card>
  );
}
