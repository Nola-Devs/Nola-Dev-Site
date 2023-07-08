"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { organizationsStore } from "./organizations";
import {
  createTheme,
  NextUIProvider,
  Navbar,
  Link,
  Text,
  Switch,
  Dropdown,
  getDocumentTheme,
  changeTheme,
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#000",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "$green600",
      primaryLightHover: "$green500",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green100",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#a259fb",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme);
    changeTheme(nextTheme);
  };

  useEffect(() => {
    let theme = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");
    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
          <Navbar isBordered variant="floating">
            <Link href="/">
              <Text size={"20pt"} color="primary">
                Nola Devs
              </Text>
            </Link>
            <Navbar.Content>
              <Link href="/calendar">Calendar</Link>
              <Dropdown>
                <Dropdown.Button flat>Groups</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  {Object.keys(organizationsStore).map((e, i) => (
                    <Dropdown.Item key={i}>
                      <Link href={`/${e}`}>{e.replace(/-/g, " ")}</Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Switch
                checked={isDark}
                size="sm"
                onChange={handleChange}
                iconOff={"🌞"}
                iconOn={"🌘"}
              />
            </Navbar.Content>
          </Navbar>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
