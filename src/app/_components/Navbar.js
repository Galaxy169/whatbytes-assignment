import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <navbar className="flex justify-between items-center">
      <div>
        <Link href="/" className="text-3xl mx-4">LOGO</Link>
      </div>
      <div className="flex items-center gap-10">
        <SearchBar />
        <Link
          href="/cart"
          className="flex gap-2 px-8 py-3 rounded-xl bg-[#002b5b]"
        >
          <ShoppingCartIcon />
          <button className="font-bold">Cart</button>
        </Link>
      </div>
    </navbar>
  );
}

export default Navbar;
