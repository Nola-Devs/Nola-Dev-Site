"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Organizations, urlDTO } from "../types/index";
import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Link, Card, Text } from "@nextui-org/react";
import { organizationsStore } from "../organizations";
import { Organizer } from "../types/Organizer";

const organizations: Organizations = organizationsStore;

export default function Group() {
  const group: string = usePathname().slice(1);

  return (
    <div>
      <h1>{group}</h1>
      <h2>About</h2>
      <p>{organizations[group]?.about}</p>
      <Card
        variant='bordered'
        css={{ mw: "600px", margin: "50px auto", alignContent: "center" }}
      >
        <Card.Header>
          <Text>
          Organizers

          </Text>
        </Card.Header>
        <Card.Body>
          {organizations[group]?.organizers.map((e: Organizer, i: number) => (
            <Text key={i}>
              <Image
                src={e.pfp}
                alt='organizer profile picture'
                height={100}
                width={100}
              />
              <p>{e.name}</p>
              {e.links?.map((e: urlDTO, i: number) => {
                const linked = Object.keys(e)[0];
                let icon;
                switch (linked) {
                  case "linkedin":
                    icon = (
                      <Link
                        href={Object.values(e)[0]}
                        target='_blank'
                        key={Object.values(e)[0] + i}
                      >
                        <LinkedinOutlined />
                      </Link>
                    );
                    break;
                  case "github":
                    icon = (
                      <Link
                        href={Object.values(e)[0]}
                        target='_blank'
                        key={Object.values(e)[0] + i}
                      >
                        <GithubOutlined />
                      </Link>
                    );
                    break;
                  case "email":
                    icon = (
                      <Link
                        href={Object.values(e)[0]}
                        target='_blank'
                        key={Object.values(e)[0] + i}
                      >
                        <MailOutlined />
                      </Link>
                    );
                    break;
                  case "portfolio":
                    icon = (
                      <Link
                        href={Object.values(e)[0]}
                        target='_blank'
                        key={Object.values(e)[0] + i}
                      >
                        <GlobalOutlined />
                      </Link>
                    );
                    break;
                  default:
                    icon = (
                      <Link
                        href={Object.values(e)[0]}
                        target='_blank'
                        key={Object.values(e)[0] + i}
                      >
                        <LinkOutlined />
                      </Link>
                    );
                    break;
                }
                return icon;
              })}
            </Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
