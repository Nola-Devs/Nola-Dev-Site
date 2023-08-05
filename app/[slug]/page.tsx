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
    <div className="flex justify-center items-center flex-col pt-4">
      <Card className="m-5 max-w-xl px-4">
        <CardHeader className="font-bold justify-center mt-2">
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
            href={ organizations[group]?.org_url }
            target="_blank"
          >
            {organizations[group]?.org_url}
          </Link>
        </CardFooter>
      </Card>
      <Card className="m-5 max-w-xl px-4">
        <CardHeader className="font-bold justify-center mt-2">Organizers</CardHeader>
        <Divider />
        <div className="flex justify-evenly self-center flex-col sm:flex-row ">
          {organizations[group]?.organizers.map((e: Organizer, i: number) => (
            <Card
              isFooterBlurred={ true }
              shadow="md"
              className="m-5 min-w-fit"
              key={ `${e}${i}` }
            >
              <CardBody className="p-0">
                <Image
                  shadow="none"
                  className="object-cover"
                  src={ e.pfp }
                  width="250"
                  height="250"
                  alt="organizer profile picture"
                />
              </CardBody>
              <CardFooter className="absolute bg-white/30 bottom-0 items-center border-t-1 border-slate-900 z-10 justify-between h-10 text-slate-900 font-bold">
                <p>{e.name}</p>
                <div className="flex items-center self-center gap-2">
                  {e.links?.map((e: urlDTO, i: number) => {
                    const linked = Object.keys(e)[0];
                    let icon;
                    switch (linked) {
                      case "linkedin":
                        icon = (
                          <a
                            href={ Object.values(e)[0] }
                            target="_blank"
                            key={ Object.values(e)[0] + i } rel="noreferrer"
                          >
                            <LinkedinOutlined />
                          </a>
                        );
                        break;
                      case "github":
                        icon = (
                          <a
                            href={ Object.values(e)[0] }
                            target="_blank"
                            key={ Object.values(e)[0] + i } rel="noreferrer"
                          >
                            <GithubOutlined />
                          </a>
                        );
                        break;
                      case "email":
                        icon = (
                          <a
                            href={ `mailto:${Object.values(e)[0]}` }
                            target="_blank"
                            key={ Object.values(e)[0] + i } rel="noreferrer"
                          >
                            <MailOutlined />
                          </a>
                        );
                        break;
                      case "portfolio":
                        icon = (
                          <a
                            href={ Object.values(e)[0] }
                            target="_blank"
                            key={ Object.values(e)[0] + i } rel="noreferrer"
                          >
                            <GlobalOutlined />
                          </a>
                        );
                        break;
                      default:
                        icon = (
                          <a
                            href={ Object.values(e)[0] }
                            target="_blank"
                            key={ Object.values(e)[0] + i } rel="noreferrer"
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
