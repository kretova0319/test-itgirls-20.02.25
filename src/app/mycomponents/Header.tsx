import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" bg-black ">
      <div className="flex items-center justify-between px-10 py-3">
        <Link href="/">
          <span className="text-green-800  font-bold text-2xl hover:text-green-300 hover:cursor-pointer transition-colors duration-1000 ease-in-out ">
            Puzzle - Service
          </span>
        </Link>
        <Image
          src="/puzzle.svg"
          alt="puzzle-pic"
          width={28}
          height={28}
          className="animate-pulse"
        />
        <nav className="text-white text-xs flex gap-5 ">
          <Link
            href="/"
            className="hover:underline hover:cursor-pointer duration-1000 ease-in-out"
          >
            Главная
          </Link>
          <Link
            href="/about"
            className="hover:underline hover:cursor-pointer duration-1000 ease-in-out"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
