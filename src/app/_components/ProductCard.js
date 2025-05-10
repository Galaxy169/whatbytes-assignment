"use client";

import { ShoppingCartIcon } from "lucide-react";
import { products } from "../lib/productData";
import { useState } from "react";
import Image from "next/image";

function ProductCard() {
  //   const [productState, setProductState] = useState();
  //   products.map((product) => {
  //     setProductState(product);
  //   });
  return (
    <>
      {products.map((product) => (
        <div
          className="flex flex-col text-slate-900 bg-[#fefefe] rounded-md p-4 gap-1 shadow hover:shadow-lg transition"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-60 object-cover mb-2"
          />
          <h3 className="font-bold text-xl">{product.title}</h3>
          <p className="font-semibold text-lg mb-2">${product.price}</p>
          <div className="flex gap-2 px-8 py-3 rounded-xl bg-[#025cb1] text-white justify-center items-center">
            <button className="font-bold ">Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
