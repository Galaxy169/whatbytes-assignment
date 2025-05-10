import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#002b60] items-center py-8">
      <div className="flex justify-around">
        <div className="">
          <h1 className="text-2xl font-bold mb-5">Navigate</h1>
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
          </div>
          <p className="mt-8">&copy; 2024 America</p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-5">About Us</h1>
          <div className="flex flex-col gap-4">
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-5">Follow us</h1>
          <div className="flex gap-6">
            <span className="rounded-full bg-[#1166ba] p-3">
              <Facebook />
            </span>
            <span className="rounded-full bg-[#1166ba] p-3">
              <Twitter />
            </span>
            <span className="rounded-full bg-[#1166ba] p-3">
              <Instagram />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
