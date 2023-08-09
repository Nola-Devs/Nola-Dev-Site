"use client";
import { usePathname } from "next/navigation";
import {
  Card,
  Link,
  Image,
  CardFooter,
  CardBody,
  Divider,
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
    <div className="flex justify-center max-w-[650px] items-center mx-auto gap-6 flex-col pt-4">
      <Card className="min-w-full border border-stone-300 bg-gradient-to-br from-white to-default-100 dark:from-secondary-50 dark:to-black px-4 py-2">
        <CardHeader className="font-bold justify-center text-2xl">
          {group.replace(/-/g, " ")}
        </CardHeader>
        <Divider />
        <CardBody>{organizations[group]?.about}</CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            isBlock
            showAnchorIcon
            color="secondary"
            size="sm"
            href={organizations[group]?.org_url}
            target="_blank"
          >
            {organizations[group]?.org_url}
          </Link>
        </CardFooter>
      </Card>
      <Card className="min-w-full border border-stone-300 bg-gradient-to-br from-white to-default-100 dark:from-secondary-50 dark:to-black px-4 py-2">
        <CardHeader className="font-bold justify-center text-xl">Organizers</CardHeader>
        <Divider />
        <div className="flex justify-evenly self-center flex-col sm:w-full sm:flex-row flex-wrap">
          {organizations[group]?.organizers.map((e: Organizer, i: number) => (
            <Card
              isFooterBlurred
              shadow="md"
              className="m-5 min-w-fit w-[250px] h-[250px] border-2 border-slate-500"
              key={`${e}${i}`}
            >
              <CardBody className="p-0 overflow-hidden">
                <Image
                  shadow="none"
                  className="object-cover"
                  src={e.pfp}
                  width="250"
                  height="250"
                  alt="organizer profile picture"
                />
              </CardBody>
              <CardFooter className="absolute bg-white/30 bottom-0 items-center border-t-1 border-slate-900 z-10 justify-between h-10 text-slate-900 font-semibold">
                <p>{e.name}</p>
                <div className="flex items-center self-center gap-2">
                  {e.links?.map((e: urlDTO, i: number) => {
                    const linked = Object.keys(e)[0];
                    let icon;
                    switch (linked) {
                      case "linkedin":
                        icon = (
                          <a
                            href={Object.values(e)[0]}
                            target="_blank"
                            key={Object.values(e)[0] + i} rel="noreferrer"
                          >
                            <LinkedinOutlined />
                          </a>
                        );
                        break;
                      case "github":
                        icon = (
                          <a
                            href={Object.values(e)[0]}
                            target="_blank"
                            key={Object.values(e)[0] + i} rel="noreferrer"
                          >
                            <GithubOutlined />
                          </a>
                        );
                        break;
                      case "email":
                        icon = (
                          <a
                            href={`mailto:${Object.values(e)[0]}`}
                            target="_blank"
                            key={Object.values(e)[0] + i} rel="noreferrer"
                          >
                            <MailOutlined />
                          </a>
                        );
                        break;
                      case "portfolio":
                        icon = (
                          <a
                            href={Object.values(e)[0]}
                            target="_blank"
                            key={Object.values(e)[0] + i} rel="noreferrer"
                          >
                            <GlobalOutlined />
                          </a>
                        );
                        break;
                      default:
                        icon = (
                          <a
                            href={Object.values(e)[0]}
                            target="_blank"
                            key={Object.values(e)[0] + i} rel="noreferrer"
                          >
                            <LinkOutlined />
                          </a>
                        );
                        break;
                    }
                    return icon;
                  })}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
