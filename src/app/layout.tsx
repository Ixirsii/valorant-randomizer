import "~/styles/globals.css";

import { type Metadata } from "next";
import { type ReactNode } from "react";
import Header from "~/app/_components/header";
import ThemeProvider from "~/providers/theme-provider";

export const metadata: Metadata = {
  title: "Valorant randomizer",
  description: "Randomized agents and weapons for Valorant",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
