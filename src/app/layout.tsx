"use client";

import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
