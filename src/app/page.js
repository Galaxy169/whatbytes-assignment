"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./_components/ProductCard";
import Sidebar from "./_components/Sidebar";
import { products } from "./lib/productData";

function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-6 p-6 mt-2">
        <Sidebar />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-scroll h-screen">
          {filteredProducts.length ? (
            filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p>No products found.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default page;
