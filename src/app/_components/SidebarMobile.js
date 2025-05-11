"use client";

import { SlidersHorizontal } from "lucide-react";
import Filters from "./Filters";
import { useState } from "react";

function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`lg:hidden fixed ${
          !isOpen ? "bg-blue-900" : "bg-red-700"
        }  gap-2 text-slate-200 rounded-2xl py-4 flex flex-col items-center z-10 top-1/2 right-0`}
        onClick={() => setIsOpen((Open) => !Open)}
      >
        <SlidersHorizontal />
        <p className="rotate-90 mt-2 mb-2">Filter</p>
      </div>
      <aside
        className={`w-full fixed ${
          !isOpen ? "translate-x-[-200%]" : "translate-x-[-12%]"
        } max-w-[270px] max-h-100 shadow-2xl bg-[#0759a7ff] px-6 py-6 m-2 rounded-3xl transition-all duration-200`}
      >
        <h2 className="font-bold mb-5 text-2xl">Filters</h2>
        <Filters />
      </aside>
    </>
  );
}

export default SidebarMobile;
