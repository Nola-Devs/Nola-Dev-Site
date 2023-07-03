"use client";
import { useEffect } from "react";
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
import { organizationsStore } from "../organizations";
import { Organizer } from "../types/Organizer";

const organizations: Organizations = organizationsStore;

export default function Group() {
  const group: string = usePathname().slice(1);

  const getCalData = () => {
    fetch("/api").then((data) => console.log(data));
  };

  useEffect(() => getCalData(), []);
  return (
    <>
      <h1>{group}</h1>
      <h2>About</h2>
      <p>{organizations[group]?.about}</p>
      <h2>Organizers</h2>
      {organizations[group]?.organizers.map((e: Organizer, i: number) => (
        <div key={i}>
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
                    href={Object.values(e)[0]}
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
        </div>
      ))}
    </>
  );
}
