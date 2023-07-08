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
        "@sm": { mw: "unset", overflow: "hidden" },
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
          <Link href={organizations[group]?.org_url} target="_blank">
            {organizations[group]?.org_url}
          </Link>
        </Card.Footer>
      </Card>
      <Card
        variant="bordered"
        css={{ mw: "50rem", p: "1rem", margin: "2rem auto" }}
      >
        <Card.Header>
          <Text h2>Organizers</Text>
        </Card.Header>
        <Card.Body
          css={{
            display: "flex",
            overflow: "hidden",
            flexWrap: "wrap",
            "@xs": { flexDirection: "column" },
          }}
        >
          <Container
            display="flex"
            wrap="nowrap"
            css={{
              justifyContent: "center",
              // "@sm": { flexWrap: "wrap" },
              "@xs": { flexWrap: "wrap" },
              "@xsMax": { flexWrap: "wrap", gap: "1rem" },
            }}
          >
            {organizations[group]?.organizers.map((e: Organizer, i: number) => (
              <Container
                key={i}
                display="flex"
                justify="center"
                alignContent="center"
                alignItems="center"
                css={{ mw: "200px" }}
              >
                <Row
                  css={{
                    display: "flex",
                    "@xs": { flexDirection: "column", overflow: "hidden" },
                  }}
                >
                  <Col css={{ display: "flex", justifyContent: "center" }}>
                    <Text>{e.name}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col css={{ display: "flex", justifyContent: "center" }}>
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
                <Grid.Container gap={1} justify="center">
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
                              href={`mailto:${Object.values(e)[0]}`}
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