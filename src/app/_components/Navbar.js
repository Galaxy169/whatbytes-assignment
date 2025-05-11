"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Suspense, use } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import user2 from "../../../public/images/user-2.webp";

function Navbar() {
  return (
    <navbar className="flex justify-between items-center">
      <Link href="/" className="sm:mx-4">
        {/* <Link
          href="/"
          className="text-2xl md:text-3xl mx-4 hover:text-slate-300 transition-all duration-200"
        >
        </Link> */}
        <Image
          src={logo}
          alt="logo"
          className="sm:w-16 sm:h-16 w-10 h-10 object-cover"
        />
      </Link>
      <Suspense>
        <SearchBar />
      </Suspense>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-4">
        <Link
         title="View Cart"
          href="/cart"
          className="flex gap-2 md:px-8 px-3 py-3 rounded-xl bg-[#002b5b] hover:scale-105 duration-300 transition-all hover:bg-blue-900"
        >
          <ShoppingCartIcon />
          <button className="font-bold text-lg md:block hidden cursor-pointer">
            Cart
          </button>
        </Link>
        <Image
         title="Profile"
          src={user2}
          alt="logo"
          className="sm:w-16 sm:h-16 w-12 h-12 object-cover rounded-full ring-4 ring-indigo-500 hover:ring-indigo-400 hover:scale-105 transition-all duration-200"
        />
      </div>
    </navbar>
  );
}

export default Navbar;
