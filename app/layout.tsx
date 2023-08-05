"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { organizationsStore } from "./organizations";
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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("");

  const changeTheme = () => {
    if (localStorage.getItem("themeMode") === "dark") {
      setTheme("light");
      localStorage.setItem("themeMode", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("themeMode", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("themeMode") === "dark") {
      setTheme("dark");
    } else if (localStorage.getItem("themeMode") === "light") {
      setTheme("light");
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme("dark");
      localStorage.setItem("themeMode", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("themeMode", "light");
    }
  }, []);

  return (
    <html id="html" lang="en" className={ localStorage.getItem("themeMode") }>
      <body className={ inter.className }>
        <NextUIProvider>
          <Navbar shouldHideOnScroll className="py-4 px-3.5">
            <NavbarBrand>
              <Link href="/">
                <Image src={ localStorage.getItem("themeMode") === "dark" ? "logo-dark.webp" : "logo.webp" } alt="Logo" width={ 50 } />
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <Link href="/calendar">Calendar</Link>
              <Dropdown>
                <DropdownTrigger>
                  <Button>Groups</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {Object.keys(organizationsStore).map((e, i) => (
                    <DropdownItem key={ i }>
                      <Link className="w-full" href={ `/${e}` }>
                        {e.replace(/-/g, " ")}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Switch
                size="sm"
                isSelected={ theme === "light" }
                startContent={ <p>🌞</p> }
                endContent={ <p>🌒</p> }
                onChange={ changeTheme }
              />
            </NavbarContent>
          </Navbar>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
