"use client";
import { usePathname } from "next/navigation";
import {
  Card,
  Link,
  Avatar,
  CardFooter,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { Organizations, urlDTO } from "../types/index";
import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { organizationsStore } from "../organizations";
import { Organizer } from "../types/Organizer";

const organizations: Organizations = organizationsStore;

export default function Group() {
  const group: string = usePathname().slice(1);

  return (
      <Card>
        <CardHeader>{group.replace(/-/g, " ")}</CardHeader>
        <CardBody>{organizations[group]?.about}</CardBody>
        <CardFooter>
          <Link href={organizations[group]?.org_url} target='_blank'>
            {organizations[group]?.org_url}
          </Link>
        </CardFooter>
      <Card>
        <CardHeader>Organizers</CardHeader>
        <CardBody>
          {organizations[group]?.organizers.map((e: Organizer, i: number) => (
            <Card key={`${e}${i}`}>
              <CardHeader>{e.name}</CardHeader>
              <CardBody>
                <Avatar src={e.pfp} alt='organizer profile picture' />
              </CardBody>
              <CardFooter>
                {e.links?.map((e: urlDTO, i: number) => {
                  const linked = Object.keys(e)[0];
                  let icon;
                  switch (linked) {
                    case "linkedin":
                      icon = (
                        <a
                          href={Object.values(e)[0]}
                          target='_blank'
                          key={Object.values(e)[0] + i}
                        >
                          <LinkedinOutlined />
                        </a>
                      );
                      break;
                    case "github":
                      icon = (
                        <a
                          href={Object.values(e)[0]}
                          target='_blank'
                          key={Object.values(e)[0] + i}
                        >
                          <GithubOutlined />
                        </a>
                      );
                      break;
                    case "email":
                      icon = (
                        <a
                          href={`mailto:${Object.values(e)[0]}`}
                          target='_blank'
                          key={Object.values(e)[0] + i}
                        >
                          <MailOutlined />
                        </a>
                      );
                      break;
                    case "portfolio":
                      icon = (
                        <a
                          href={Object.values(e)[0]}
                          target='_blank'
                          key={Object.values(e)[0] + i}
                        >
                          <GlobalOutlined />
                        </a>
                      );
                      break;
                    default:
                      icon = (
                        <a
                          href={Object.values(e)[0]}
                          target='_blank'
                          key={Object.values(e)[0] + i}
                        >
                          <LinkOutlined />
                        </a>
                      );
                      break;
                  }
                  return icon;
                })}
              </CardFooter>
            </Card>
          ))}
        </CardBody>
      </Card>
      </Card>
    
  );
}
