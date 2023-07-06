"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import {
  Container,
  Grid,
  Card,
  Text,
  Link,
  Avatar,
  Row,
  Col,
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
    <Container
      display="flex"
      justify="center"
      css={{
        alignItems: "center",
        flexDirection: "column",
        mx: "auto",
        mw: "41rem",
        "@sm": { mw: "unset" },
      }}
    >
      <Text h1 weight="extrabold" css={{ mt: "4rem" }}>
        {group.replace(/-/g, " ")}
      </Text>
      <Card
        variant="bordered"
        css={{ mw: "50rem", p: "1rem", margin: "2rem auto" }}
      >
        <Text h2>About</Text>
        <Text>{organizations[group]?.about}</Text>
        <Card.Footer>
          <Link>{organizations[group]?.org_url}</Link>
        </Card.Footer>
      </Card>
      <Card
        variant="bordered"
        css={{ mw: "50rem", p: "1rem", margin: "2rem auto" }}
      >
        <Card.Header>
          <Text h2>Organizers</Text>
        </Card.Header>
        <Card.Body>
          <Container display="flex" wrap="nowrap">
            {organizations[group]?.organizers.map((e: Organizer, i: number) => (
              <Container
                key={i}
                display="flex"
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Row>
                  <Col>
                    <Avatar
                      squared
                      bordered
                      zoomed
                      css={{ size: "$36" }}
                      src={e.pfp}
                      alt="organizer profile picture"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>{e.name}</Text>
                  </Col>
                </Row>
                <Grid.Container gap={1}>
                  {e.links?.map((e: urlDTO, i: number) => {
                    const linked = Object.keys(e)[0];
                    let icon;
                    switch (linked) {
                      case "linkedin":
                        icon = (
                          <Grid>
                            <a
                              href={Object.values(e)[0]}
                              target="_blank"
                              key={Object.values(e)[0] + i}
                            >
                              <LinkedinOutlined />
                            </a>
                          </Grid>
                        );
                        break;
                      case "github":
                        icon = (
                          <Grid>
                            <a
                              href={Object.values(e)[0]}
                              target="_blank"
                              key={Object.values(e)[0] + i}
                            >
                              <GithubOutlined />
                            </a>
                          </Grid>
                        );
                        break;
                      case "email":
                        icon = (
                          <Grid>
                            <a
                              href={Object.values(e)[0]}
                              target="_blank"
                              key={Object.values(e)[0] + i}
                            >
                              <MailOutlined />
                            </a>
                          </Grid>
                        );
                        break;
                      case "portfolio":
                        icon = (
                          <Grid>
                            <a
                              href={Object.values(e)[0]}
                              target="_blank"
                              key={Object.values(e)[0] + i}
                            >
                              <GlobalOutlined />
                            </a>
                          </Grid>
                        );
                        break;
                      default:
                        icon = (
                          <Grid>
                            <a
                              href={Object.values(e)[0]}
                              target="_blank"
                              key={Object.values(e)[0] + i}
                            >
                              <LinkOutlined />
                            </a>
                          </Grid>
                        );
                        break;
                    }
                    return icon;
                  })}
                </Grid.Container>
              </Container>
            ))}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}


        {/* <Grid.Container gap={2} justify="center"> */}
          {/* <Grid> */}
            {/* <Text h2>Organizers</Text> */}
          {/* </Grid> */}

        // </Grid.Container>