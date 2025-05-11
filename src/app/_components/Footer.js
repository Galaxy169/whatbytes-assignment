import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#002b60] items-center py-8">
      <div className="flex relative flex-wrap md:gap-0 gap-10  justify-evenly md:justify-around">
        <div className="">
          <h1 className="text-2xl font-bold mb-5">Navigate</h1>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-slate-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="hover:text-slate-400 transition-all duration-300 "
            >
              Cart
            </Link>
          </div>
          <p className="md:block hidden mt-8 ">
            &copy; 2025 WhatBytes. All rights reserved.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-5">About Us</h1>
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="hover:text-slate-400 transition-all duration-300"
            >
              About us
            </Link>
            <Link
              href="#"
              className="hover:text-slate-400 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-left text-center font-bold mb-5">
            Follow us
          </h1>
          <div className="flex gap-6 ">
            <span className="rounded-full bg-[#1166ba] p-3 cursor-pointer hover:text-blue-200 hover:-translate-y-1.5 transition-all duration-200">
              <Facebook />
            </span>
            <span className="rounded-full bg-[#1166ba] p-3 cursor-pointer hover:text-blue-200 hover:-translate-y-1.5 transition-all duration-200">
              <Twitter />
            </span>
            <span className="rounded-full bg-[#1166ba] p-3 cursor-pointer hover:text-blue-200 hover:-translate-y-1.5 transition-all duration-200">
              <Instagram />
            </span>
          </div>
        </div>
      </div>
      <p className="mt-10 block md:hidden text-center">
        &copy; 2025 WhatBytes. All rights reserved. Made with 💚 By Aadil
      </p>
    </footer>
  );
}

export default Footer;
