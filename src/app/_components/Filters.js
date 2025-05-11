"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Filters() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(1000);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("category") || "All";
    const price = parseInt(searchParams.get("price") || "1000");
    setCategory(cat);
    setPrice(price);
  }, [searchParams]);

  const filterUpdate = (cat, price) => {
    const params = new URLSearchParams(searchParams.toString());

    if (cat && cat !== "All") {
      params.set("category", cat.toLowerCase());
    } else {
      params.delete("category");
    }

    if (price < 1000) {
      params.set("price", price.toString());
    } else {
      params.delete("price");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    filterUpdate(newCategory, price);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    filterUpdate(category, newPrice);
  };

  return (
    <>
      <div className="mb-4 z-9">
        <h3 className="font-semibold text-xl mb-2">Category</h3>
        <ul className="space-y-1">
          {["All", "Electronics", "Clothing", "Appliances"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-3 text-lg cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  onChange={handleCategoryChange}
                  defaultChecked={cat === "All"}
                  className="appearance-none w-4 h-4 border-2 border-slate-400 rounded-full checked:ring-2 checked:ring-slate-200 checked:hover:ring-slate-50 checked:active:ring-slate-50 cursor-pointer transition-all duration-200"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-2">Price (${price})</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step={100}
          className="w-full mt-2 appearance-none bg-white/50 h-1.5 rounded-full"
          value={price}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between text-lg">
          <p>$0</p>
          <p>$1000</p>
        </div>
      </div>
    </>
  );
}

export default Filters;
