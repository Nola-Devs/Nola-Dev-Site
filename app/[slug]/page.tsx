"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Organizations } from "../types/Organizations";
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
  const location: string = usePathname().slice(1);

  return (
    <>
      <h1>{location}</h1>
      <h2>About</h2>
      <p>{organizations[location].about}</p>
      <h2>Organizers</h2>
      {organizations[location].organizers.map((e: Organizer, i: number) => (
        <div key={i}>
          <Image
            src={e.pfp}
            alt='organizer profile picture'
            height={100}
            width={100}
          />
          <p>{e.name}</p>
          {e.links?.map((e: any) => {
            const linked = Object.keys(e)[0];
            let icon;
            switch (linked) {
              case "linkedin":
                icon = (
                  <a
                    href={Object.values(e)[0]}
                    target='_blank'
                    key={Object.values(e)[0]}
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
                    key={Object.values(e)[0]}
                  >
                    <GithubOutlined />
                  </a>
                );
                break;
              case "email":
                icon = (
                  <a
                    href={Object.values(e)[0]}
                    target='_blank'
                    key={Object.values(e)[0]}
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
                    key={Object.values(e)[0]}
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
                    key={Object.values(e)[0]}
                  >
                    <LinkOutlined />
                  </a>
                );
                break;
            }
            return icon;
          })}
        </div>
      ))}
    </>
  );
}
