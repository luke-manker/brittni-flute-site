import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "McDonald Flute | About",
  description: "McDonald Flute Studio",
  icons: {
    icon: "/icon.ico",
  },
};

const page: FC = () => {
  return <h1>about</h1>;
};

export default page;
