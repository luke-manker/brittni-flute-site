"use client";

import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brittni McDonald Flute Studio",
  description: "Brittni McDonald Flute Studio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("/");

  return (
    <html lang="en" className="bg-brittni_off_white">
      <body className={inter.className}>
        <NavBar activePage={activePage} />
        {children}
      </body>
    </html>
  );
}
