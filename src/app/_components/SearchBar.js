"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { debounce } from "../_utils/debounce";

function SearchBar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const isExist = searchParams.get("search") || "";
    setInput(isExist);
  }, [searchParams]);

  const handleSearch = useRef(
    debounce((query) => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      router.push(`${pathname}?${params.toString()}`);
    }, 300)
  ).current;

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    handleSearch(value);
  };

  return (
    <div className="relative">
      <span className="absolute top-1/4 bottom-1/4 md:left-4 left-2 text-white/80">
        <SearchIcon />
      </span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search for products..."
        className="border-2 border-white/30 rounded-xl py-3 lg:w-9/4 md:w-5/4  md:pl-14 pl-4 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none md:placeholder:text-base md:placeholder:text-left placeholder:text-sm placeholder:text-center"
      />
    </div>
  );
}

export default SearchBar;
