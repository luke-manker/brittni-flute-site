import type { Metadata } from "next";
import { FC } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "McDonald Flute | About",
  description: "McDonald Flute Studio",
  icons: {
    icon: "/icon.ico",
  },
};

const page: FC = () => {
  return (
    <div className="m-10 border-solid border-8 border-brittni_burgundy min-h-1/2">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={"/images/profile.png"} className="pt-1" />
        </div>
        <div className="lg:w-1/2 mt-4">
          <p>I AM A LOT OF TEXT</p>
        </div>
      </div>
    </div>
  );
};

export default page;
