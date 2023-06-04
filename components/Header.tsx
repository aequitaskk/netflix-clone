"use client";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import DropdownMenu from '@/components/DropdownMenu'


type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10 px-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Netflix Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light pr-8">
        <BiSearch className="hidden md:inline text-xl" />
        <p className="hidden lg:inline">Kids</p>
        <BsBellFill className="text-lg" />

        <DropdownMenu />

        
      </div>
    </header>
  );
};

export default Header;
