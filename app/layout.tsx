"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { organizationsStore } from "./organizations";
import {
  NextUIProvider,
  Navbar,
  Link,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' id='html'>
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar>
            <Link href='/'>
              <p>Nola Devs</p>
            </Link>
            <NavbarContent>
              <Link href='/calendar'>Calendar</Link>
              <Dropdown>
                <DropdownTrigger>
                  <Button>Groups</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label='Static Actions'>
                  {Object.keys(organizationsStore).map((e, i) => (
                    <DropdownItem key={i}>
                      <Link href={`/${e}`}>{e.replace(/-/g, " ")}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </Navbar>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
