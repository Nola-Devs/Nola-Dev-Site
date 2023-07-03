import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { organizationsStore } from "./organizations";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nola Devs",
  description: "The Gathering place for New Orleans' Developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav id={styles.navbar}>
          <a href="/">
            <Image
              className={styles.logo}
              src="logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <div className={styles.links}>
            {Object.keys(organizationsStore).map((e, i) => (
              <a key={i} href={`/${e}`}>
                {e}
              </a>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
