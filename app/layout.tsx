"use client";
import "./globals.css";
import React, { useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { organizationsStore } from "./data/organizations";
import {
  NextUIProvider,
  Navbar,
  NavbarBrand,
  Link,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  Button,
  Image,
  DropdownMenu,
  DropdownItem,
  Switch,
} from "@nextui-org/react";
import { getTheme, setDark, changeTheme } from "./actions";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [theme, setTheme] = useState<string | undefined>('light');

  const flipTheme = () => {
    theme === 'dark' ?
      (() => (changeTheme(), setTheme('light')))() :
      (() => (changeTheme(), setTheme('dark')))()
  };

  useEffect(() => {
    getTheme()
      .then(d => !d && window.matchMedia("(prefers-color-scheme: dark)").matches ?
        (setDark(), setTheme(d)) :
        setTheme(d))
      .catch(e => console.log(e));
  }, []);

  return (
    <html id="html" lang="en" className={theme}>
      <head>
        <title>NOLA Devs</title>
        <link rel="icon" type="image/x-icon" href="./head-assets/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./head-assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./head-assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./head-assets/favicon-16x16.png"
        />
        <link rel="manifest" href="./head-assets/site.webmanifest" />
        <link
          rel="mask-icon"
          href="./head-assets/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar shouldHideOnScroll isBordered className="py-2 px-3.5">
            <NavbarBrand>
              <Link href="/">
                <Image
                  src="logo.webp"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <Link href="/calendar">Calendar</Link>
              <Dropdown
                showArrow
                classNames={{
                  base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-secondary-50 dark:to-black",
                  arrow: "bg-secondary",
                }}
              >
                <DropdownTrigger>
                  <Button variant="shadow">Groups</Button>
                </DropdownTrigger>
                <DropdownMenu variant="shadow" aria-label="Static Actions">
                  {Object.keys(organizationsStore).filter(e => e !== "One-Off-Events").map((e, i) => (
                    <DropdownItem
                      key={i}
                      startContent={organizationsStore[e]?.icon}
                    >
                      <Link className="w-full" href={`/${e}`}>
                        {e.replace(/-/g, " ")}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Switch
                size="sm"
                isSelected={theme !== "dark"}
                startContent={<p>🌞</p>}
                endContent={<p>🌒</p>}
                onChange={flipTheme}
              />
            </NavbarContent>
          </Navbar>
          {children}
          <Analytics />
        </NextUIProvider>
      </body>
    </ html>
  );
}
