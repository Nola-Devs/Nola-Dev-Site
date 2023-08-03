"use client";
import "./globals.css";
import React from "react";
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
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="html" lang="en">
      <body className={ inter.className }>
        <NextUIProvider>
          <Navbar shouldHideOnScroll>
            <NavbarBrand>
              <Link href="/">
                <Image src="logo_light_900x844.png" alt="Logo" width={ 50 } />
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
            </NavbarContent>
          </Navbar>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
