import { SearchIcon, ShoppingCartIcon } from "lucide-react";

function Navbar() {
  return (
    <navbar className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl mx-4">LOGO</h1>
      </div>
      <ul className="flex items-center gap-10">
        <li className="relative">
          <span className="absolute top-1/4 bottom-1/4 left-4 text-white/80">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            className="border-2 border-white/30 rounded-xl py-3 pr-40 pl-12"
          />
        </li>
        <li className="flex gap-2 px-8 py-3 rounded-xl bg-[#002b5b]">
          <ShoppingCartIcon />
          <button className="font-bold">Cart</button>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
