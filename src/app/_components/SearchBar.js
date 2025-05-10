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
      <span className="absolute top-1/4 bottom-1/4 left-4 text-white/80">
        <SearchIcon />
      </span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search for products..."
        className="border-2 border-white/30 rounded-xl py-3 pr-40 pl-12"
      />
    </div>
  );
}

export default SearchBar;
