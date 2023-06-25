import { FunctionComponent, useState } from "react";
import Link from "next/link";
import React from "react";

interface NavBarProps {
  activePage: string;
}

const NavBar: FunctionComponent<NavBarProps> = (activePage) => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className="flex items-center justify-center border-b border-brittni_yellow py-8 px-10">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 ">
                <a href="/about">home</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/about">about</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/about">lessons</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/about">media</a>
              </li>
              <li className="border-b border-gray-400 my-8 ">
                <a href="/about">contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-48 lg:flex">
          <li className="text-brittni_text text-2xl">
            <a href="/">home</a>
          </li>
          <li className="text-brittni_text text-2xl font-light">
            <a href="/about">about</a>
          </li>
          <li className="text-brittni_text text-2xl font-light">
            <a href="/about">lessons</a>
          </li>
          <li className="text-brittni_text text-2xl font-light">
            <a href="/about">media</a>
          </li>
          <li className="text-brittni_text text-2xl font-light">
            <a href="/about">contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default NavBar;
