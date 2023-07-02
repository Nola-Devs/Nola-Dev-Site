"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Organizations } from "../types/Organizations";
import org from "../organizations.json";
import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const organizations: any = org;

export default function Group() {
  const location: string = usePathname().slice(1);
  console.log(organizations[location]);
  return (
    <>
      <h1>{location}</h1>
      <h2>About</h2>
      <p>{organizations[location].about}</p>
      <h2>Organizers</h2>
      <p>
        {organizations[location].organizers.map((e: any, i: number) => (
          <div key={i}>
            <Image
              src={e.pfp}
              alt='organizer profile picture'
              height={100}
              width={100}
            />
            <p>{e.name}</p>
            {e.links.map((e: any) => {
              const linked = Object.keys(e)[0];
              let icon;
              switch (linked) {
                case "linkedin":
                  icon = <LinkedinOutlined />;
                  break;
                case "github":
                  icon = <GithubOutlined />;
                  break;
                case "email":
                  icon = <MailOutlined />;
                  break;
                case "porfolio":
                  icon = <GlobalOutlined />;
                  break;
                default:
                  icon = <LinkOutlined />;
              }
              return (
                <>
                  <p>{Object.values(e)}</p>
                  {icon}
                </>
              );
            })}
          </div>
        ))}
      </p>
    </>
  );
}
