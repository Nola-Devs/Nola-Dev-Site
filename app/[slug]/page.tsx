"use client";
import { usePathname } from "next/navigation";
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
          <Container
            display="flex"
            wrap="nowrap"
            css={{ justifyContent: "center" }}
          >
            {organizations[group]?.organizers.map((e: Organizer, i: number) => (
              <Container
                key={i}
                display="flex"
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Row>
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
    </div>
  );
}