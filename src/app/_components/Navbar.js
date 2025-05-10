"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Suspense } from "react";

function Navbar() {
  return (
    <navbar className="flex justify-between items-center">
      <div>
        <Link
          href="/"
          className="text-2xl md:text-3xl mx-4 hover:text-slate-300 transition-all duration-200"
        >
          LOGO
        </Link>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
        <Suspense>
          <SearchBar />
        </Suspense>
        <Link
          href="/cart"
          className="flex gap-2 md:px-8 px-4 py-3 rounded-xl bg-[#002b5b] hover:scale-105 duration-300 transition-all hover:bg-blue-900"
        >
          <ShoppingCartIcon />
          <button className="font-bold text-lg md:block hidden cursor-pointer">
            Cart
          </button>
        </Link>
      </div>
    </navbar>
  );
}

export default Navbar;
